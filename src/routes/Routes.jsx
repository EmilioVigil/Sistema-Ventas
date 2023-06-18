import { createBrowserRouter } from "react-router-dom"
// Components
import { Login } from "../components/login/Login"
import { Admin } from "../components/admin/Admin"
import { Dashboard } from "../components/dashboard/Dashboard"
import { Ventas } from "../components/ventas/Ventas"
import { ListProduct } from "../components/listProduct/ListProduct"
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/admin',
        element: <Admin />,   //Ruta raiz

        children: [
            {
                path: '/admin/dashboard',
                element: <Dashboard />
            },
            {
                path: '/admin/ventas',
                element: <Ventas />
            },
            {
                path: '/admin/productList',
                element: <ListProduct />
            }
        ]

    },
]) 