import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToastProvider from '@/providers/ToastProvider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import ShoppingPage from '@/pages/shopping/ShoppingPage';
import ProductDetails from '@/pages/product/ProductDetails';
import MainLayout from './layouts/MainLayout';
import Cart from './pages/shopping/ShoppingCart';

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename='/shopee'>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/search" element={<ShoppingPage />} />
                <Route path="*" element={<Navigate to="/search" />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
