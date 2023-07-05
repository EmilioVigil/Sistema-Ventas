import { ButtonContainer, Button } from "./MakeSale.styled"



export function MakeSale() {
    return (
        <ButtonContainer>
            <Button className="sale" >Realizar compra</Button>
            <Button className="cancel" >Cancelar</Button>
        </ButtonContainer>
    )
}