import { useState, useEffect } from 'react'

// MOCK
import Mock from '../../../../../mock.json'

// STYLES
import { ModalWrapper, ModalContent } from "./ModalSearchBar.styled"

export function ModalSearchBar({ closeModal }) {

    const [input, setInput] = useState('')
    const [products, setProducts] = useState([])
    const handleClick = (e) => {
        e.preventDefault()
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSearch = () => {

    }

    return (
        <ModalWrapper >
            <ModalContent>
                <button onClick={closeModal}>X</button>
                <h3>Producto</h3>
                <form action="">
                    <input type="text"
                        placeholder='Buscar producto...'
                        value={input}
                        onChange={e => handleInput(e)}
                    />
                    <button onClick={handleClick} >Buscar</button>
                    {
                        products ? 'No hay productos..' : ''
                    }
                </form>
            </ModalContent>
        </ModalWrapper>
    )
}