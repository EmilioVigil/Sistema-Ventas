import { useNavigate } from "react-router-dom"

export function Ventas() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        return navigate('/admin/dashboard')
    }

    return (
        <>
            <p>Ventas</p>
            <button onClick={handleClick}>Dashboard</button>
        </>
    )
}