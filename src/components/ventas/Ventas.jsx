import { useNavigate } from "react-router-dom"
import { SideBar } from '../navBar/NavBar'
import { Container, Prueba } from "./Ventas.styled";

export function Ventas() {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        return navigate('/admin/dashboard')
    }

    return (
        <>
            <SideBar />
            <Container>
                <Prueba>
                    {/* <p>Ventas</p>
                <button onClick={handleClick}>Dashboard</button> */}

                </Prueba>
            </Container>
        </>

    )
}

