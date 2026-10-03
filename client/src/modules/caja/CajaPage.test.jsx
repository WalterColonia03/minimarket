import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CajaPage from './CajaPage';
import api from '../../utils/axios';

// Mockeamos la API de axios
vi.mock('../../utils/axios', () => {
  return {
    default: {
      get: vi.fn(),
      post: vi.fn(),
    }
  };
});

describe('CajaPage (Pruebas de Componente RTL)', () => {
  const turnoActivoMock = {
    id: 1,
    estado: 'Abierto',
    fecha_apertura: '2026-09-27T10:00:00Z',
    monto_apertura: 500,
    cajero: { id: 1, nombre: 'Cajero Test' },
    movimientos: [
      { id: 1, tipo: 'Apertura', monto: 500, metodo: 'Efectivo', descripcion: 'Apertura de turno', createdAt: '2026-09-27T10:00:00Z' }
    ]
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Verifica que el componente carga y muestra el turno abierto', async () => {
    api.get.mockResolvedValueOnce({ data: turnoActivoMock });

    render(<CajaPage />);

    // Verificamos que al principio muestra el loader o directamente pasa si se resuelve rápido
    expect(await screen.findByText('Turno en curso')).toBeInTheDocument();
    expect(screen.getByText('Cajero Test')).toBeInTheDocument();
    expect(screen.getAllByText('S/ 500.00')[0]).toBeInTheDocument(); // Monto de apertura
  });

  it('Abre el modal de "Cerrar turno" y envía los datos correctamente al hacer submit', async () => {
    api.get.mockResolvedValueOnce({ data: turnoActivoMock });
    const user = userEvent.setup();

    render(<CajaPage />);

    // Esperar a que cargue el turno
    await screen.findByText('Turno en curso');

    // Hacer clic en "Cerrar turno"
    const btnCerrar = screen.getByRole('button', { name: /cerrar turno/i });
    await user.click(btnCerrar);

    // Verificar que el modal se abrió
    expect(screen.getByRole('heading', { name: /cerrar turno/i, level: 3 })).toBeInTheDocument();

    // Llenar datos de cierre
    const inputsMonto = screen.getAllByPlaceholderText('0.00');
    const inputEfectivo = inputsMonto[0];
    const inputYape = inputsMonto[1];
    const inputObs = screen.getByPlaceholderText(/faltaron 5 soles/i);

    // RTL / user-event simula el tecleo
    await user.type(inputEfectivo, '600');
    await user.type(inputYape, '100');
    await user.type(inputObs, 'Todo en orden');

    // Validamos prevención de caracteres inválidos "e" / "-" probando comportamiento manual o confiando en el onChange
    // Si metemos 'e', se bloquea por el onKeyDown en el componente, aunque userEvent.type sí dispara eventos.
    // RTL puede testear fireEvent.keyDown para verificar bloqueo si es necesario.

    // Mock para la respuesta de cierre
    api.post.mockResolvedValueOnce({ 
      data: { ...turnoActivoMock, estado: 'Cerrado', monto_contado_efectivo: 600, monto_contado_yape: 100 } 
    });

    // Enviar formulario
    const botonesSubmit = screen.getAllByRole('button', { name: /cerrar turno/i });
    await user.click(botonesSubmit[1]);

    // Verificar llamada a la API
    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/caja/cerrar', {
        monto_contado_efectivo: 600,
        monto_contado_yape: 100,
        observaciones: 'Todo en orden'
      });
    });

    // Verificar que pasa al estado de turno cerrado
    expect(await screen.findByText('Turno cerrado')).toBeInTheDocument();
  });
});
