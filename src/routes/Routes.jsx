import { createBrowserRouter } from "react-router-dom"
// Components
import { Login } from "../components/login/Login"
import { App } from "../App"
import { Ventas } from "../components/ventas/Ventas"
import { ListProduct } from "../components/listProduct/ListProduct"
import { Stock } from "../components/stock/Stock"
import { Admin } from "../components/admin/Admin"



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <App />,   //Ruta raiz

        children: [
            {
                path: '/dashboard/admin',
                element: <Admin />
            },
            {
                path: '/dashboard/ventas',
                element: <Ventas />
            },
            {
                path: '/dashboard/productList',
                element: <ListProduct />
            },
            {
                path : '/dashboard/stock',
                element : <Stock/>
            }
        ]

    },
]) 