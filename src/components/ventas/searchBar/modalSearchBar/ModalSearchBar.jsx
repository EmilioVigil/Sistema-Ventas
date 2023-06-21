import { useState, useEffect } from 'react'
import { UseProducts } from '../../../../hooks/UseProducts'
import { ListOfProduct } from '../product/Product'

// STYLES
import { ModalWrapper, ModalContent } from "./ModalSearchBar.styled"

export function ModalSearchBar({ closeModal }) {

    const [search, setSearch] = useState('')
    // PRODUCTOS
    const { products, loading, getProducts } = UseProducts({ search })


    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        getProducts({ search })

    }



    return (
        <ModalWrapper >
            <ModalContent>
                <button onClick={closeModal}>X</button>
                <h3>Producto</h3>
                <form action="">
                    <input type="text"
                        placeholder='Buscar producto...'
                        value={search}
                        onChange={e => handleInput(e)}
                    />
                    <button onClick={handleClick} >Buscar</button>
                </form>
            </ModalContent>
            <main>
                {
                    products ? 'Hay productos' : 'No hay productos...'

                }

            </main>
        </ModalWrapper>
    )
}