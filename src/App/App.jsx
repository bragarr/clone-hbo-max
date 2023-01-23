import { BrowserRouter, Outlet } from 'react-router-dom';
import { MainRoutes } from '../routes/MainRoutes';
import { Header } from '../components/Header/Header';
import './App.css'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
      <Outlet />
    </BrowserRouter>
  )
}
