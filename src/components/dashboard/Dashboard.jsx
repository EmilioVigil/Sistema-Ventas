import { useNavigate } from "react-router-dom"

export function Dashboard() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        return navigate('/admin/ventas')
    }

    return (
        <>
            <p>Dashboard</p>
            <button onClick={handleClick} >Volver</button>
        </>
    )
}