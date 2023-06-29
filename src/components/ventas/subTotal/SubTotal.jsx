import { useContext } from "react"
import { dataContext } from "../../../context/DataContext"

// Styled
import { Container } from "./SubTotal.styled";

export function SubTotal() {

    const { subTotal } = useContext(dataContext)



    return (
        <Container>
            <h2>
                Total:
            </h2>
            <p> $ {subTotal}</p>
        </Container>
    )
}


