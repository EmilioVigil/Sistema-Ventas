import { useNavigate } from "react-router-dom"
import { SideBar } from '../navBar/NavBar'
export function Ventas() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        return navigate('/admin/dashboard')
    }

    return (
        <>
            <SideBar />
            <p>Ventas</p>
            <button onClick={handleClick}>Dashboard</button>
        </>
    )
}