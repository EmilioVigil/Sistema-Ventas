import { useContext } from "react"
import { dataContext } from "../../../context/DataContext"
import { ButtonContainer, Button } from "./MakeSale.styled"



export function MakeSale() {
    
    const { makeSale, cancelSale } = useContext(dataContext)
    
    return (
        <ButtonContainer>
            <Button className="sale" onClick={makeSale} >Realizar compra</Button>
            <Button className="cancel" onClick={cancelSale} >Cancelar</Button>
        </ButtonContainer>
    )
}