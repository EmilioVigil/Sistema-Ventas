import { useNavigate } from "react-router-dom"

export function Stock() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        return navigate('/')
    }

    return (
        <>
            <p>Stock</p>
            <button onClick={handleClick} >Volver</button>
        </>
    )
}