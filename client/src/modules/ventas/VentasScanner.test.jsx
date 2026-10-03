import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import VentasPage from './VentasPage';
import { AuthProvider } from '../../context/AuthContext';
import { StockSyncProvider } from '../../context/StockSyncContext';
import api from '../../utils/axios';
import { BrowserRouter } from 'react-router-dom';
import * as configHook from '../../hooks/useConfiguracion';

import { vi } from 'vitest';

vi.mock('../../utils/axios');
vi.mock('../../hooks/useConfiguracion');

// Mockear el contexto de autenticación
vi.mock('../../context/AuthContext', () => ({
  useAuth: () => ({
    usuario: { id: 1, rol: 'Vendedor', nombre: 'Test Vendedor' }
  }),
  AuthProvider: ({ children }) => <div>{children}</div>
}));

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <StockSyncProvider>
      {children}
    </StockSyncProvider>
  </BrowserRouter>
);

describe('Prueba de Escáner de Productos (VentasScanner)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock config
    configHook.useConfiguracion = vi.fn().mockReturnValue({
      empresa: { nombre: 'Test' },
      igv: 0.18,
    });

    // Mock API requests iniciales
    api.get.mockImplementation((url) => {
      if (url === '/productos/activos') {
        return Promise.resolve({ data: [] });
      }
      if (url === '/caja/activo') {
        return Promise.resolve({ data: { id: 1, estado: 'Abierto' } });
      }
      return Promise.reject(new Error('not mocked'));
    });
  });

  it('Verificar que al ingresar un código de barras de 13 dígitos comercial estándar se inserte exactamente 1 unidad', async () => {
    const mockProducto = {
      id: 100,
      nombre: 'Galletas Soda',
      precio: 1.5,
      codigo_barras: '7750123456789',
      stock: 50,
      stock_vigente: 50,
      activo: true
    };

    api.get.mockImplementation((url) => {
      if (url === '/productos/activos') return Promise.resolve({ data: [] });
      if (url === '/caja/activo') return Promise.resolve({ data: { id: 1, estado: 'Abierto' } });
      if (url === '/productos/codigo/7750123456789') {
        return Promise.resolve({ data: mockProducto });
      }
      return Promise.reject(new Error('not mocked'));
    });

    render(
      <Wrapper>
        <VentasPage />
      </Wrapper>
    );

    // Esperar a que se carguen los datos iniciales
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('/caja/activo');
    });

    // Encontrar el input de escaneo
    const inputScanner = screen.getByPlaceholderText(/Escanea o escribe el código...|Haz clic aquí para escanear un producto/i);
    expect(inputScanner).toBeInTheDocument();

    // Ingresar el código de barras y presionar Enter
    fireEvent.change(inputScanner, { target: { value: '7750123456789' } });
    fireEvent.keyDown(inputScanner, { key: 'Enter', code: 'Enter' });

    // Verificar que se haya llamado la API correcta
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('/productos/codigo/7750123456789');
    });

    // Verificar que se haya insertado en el carrito exactamente 1 unidad
    // En la tabla debería aparecer el nombre del producto
    await waitFor(() => {
      expect(screen.getByText('Galletas Soda')).toBeInTheDocument();
    });

    // El input de cantidad debería tener el valor '1'
    const inputCantidad = screen.getByDisplayValue('1');
    expect(inputCantidad).toBeInTheDocument();
  });
});
