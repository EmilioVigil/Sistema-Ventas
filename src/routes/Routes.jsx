import { createBrowserRouter } from "react-router-dom"

// Components
import { Admin } from "../components/admin/Admin"
import { Dashboard } from "../components/dashboard/Dashboard"
import { Ventas } from "../components/ventas/Ventas"
import { ProductList } from "../components/productList/ProductList"
export const router = createBrowserRouter([
    {
        path: '/',
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
                element: <ProductList />
            }
        ]

    },
]) 