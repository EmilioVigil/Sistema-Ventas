// Importamos el contexto
import { useContext, useState } from "react"
import { dataContext } from "../../../../context/DataContext"

// STYLES
import { ModalWrapper, ModalContent } from "./ModalSearchBar.styled"

export function ModalSearchBar({ closeModal }) {

    const [search, setSearch] = useState('')

    // PRODUCTOS DEL CONTEXT
    const { products } = useContext(dataContext)

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()


    }



    return (
        <ModalWrapper >
            <ModalContent>
                <button onClick={closeModal}>X</button>
                <h3>Producto</h3>
                <form >
                    <input type="text"
                        placeholder='Buscar producto...'
                        value={search}
                        onChange={e => handleInput(e)}
                    />
                    <button onClick={handleClick} >Buscar</button>
                </form>
            </ModalContent>
        </ModalWrapper>
    )
}