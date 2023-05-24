import { Route, Routes } from "react-router-dom"

// Components
import { Admin } from "../components/admin/Admin"
import { Ventas } from "../components/ventas/Ventas"
import { Dashboard } from "../components/dashboard/Dashboard"

export function RoutesApp() {
    return (
        <>
            <Routes>

                <Route
                    path="/"
                    element={<Admin />}
                />

                <Route
                    path="/admin/ventas"
                    element={<Ventas />}
                />

                <Route
                    path="/admin/dashboard"
                    element={<Dashboard />}
                />
            </Routes>


        </>
    )
}