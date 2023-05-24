import { useNavigate } from "react-router-dom"

export function Admin() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        return navigate('/admin/ventas')

    }


    return (
        <>
            <p>Admin</p>
            <button onClick={handleClick} >Inicio</button>
        </>
    )
}