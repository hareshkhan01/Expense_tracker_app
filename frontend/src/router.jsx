import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/DashboardPages';
import AddExpensePage from './pages/AddExpensePage';
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/dashboard/home',
        element: <Dashboard />
    },
    {
        path:'/addExpense',
        element: <AddExpensePage/>
    }
  
])

export default router;