import { useContext } from "react"
import { dataContext } from "../../../context/DataContext"

// Styled
import {
    Container,
    SubtotalAmount,
    SubtotalText
} from "./SubTotal.styled";

export function SubTotal() {

    const { subTotal } = useContext(dataContext)



    return (
        <Container>
            <SubtotalText>
                Total:
            </SubtotalText>
            <SubtotalAmount> $ {subTotal}</SubtotalAmount>
        </Container>
    )
}


