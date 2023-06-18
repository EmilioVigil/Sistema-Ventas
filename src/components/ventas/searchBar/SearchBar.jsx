import { useState, useEffect, useRef } from 'react'
import { ModalSearchBar } from './modalSearchBar/ModalSearchBar';

import {
    SectionSearchProduct,
    InputQuantity,
    InputSearchBar
} from './SearchBar.styled'

export function SearchBar() {

    // Estado para almacenar los productos
    const [products, setProducts] = useState([]);

    // Estado para manejar las cantidades
    const [quantityProduct, setQuantityProduct] = useState(1)

    // Estado para almacenar la entrada de busqeuda
    const [searchProduct, setSearchProduct] = useState('');

    // Manejando la modal
    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const handleSearch = (e) => {
        setSearchProduct(e.target.value)
    }

    const handleQuantityProduct = (e) => {
        setQuantityProduct(e.target.value)
    }
    return (
        <SectionSearchProduct>
            <form action="">
                <InputQuantity
                    type="number"
                    value={quantityProduct}
                    onChange={handleQuantityProduct}
                />
                <InputSearchBar
                    type="text"
                    placeholder="Buscar producto"
                    value={searchProduct}
                    onChange={handleSearch}
                />
            </form>
            <button onClick={openModal} >Buscar</button>
            <button >Agregar</button>
            {
                isOpenModal && (
                    < ModalSearchBar closeModal={closeModal} />
                )
            }
        </SectionSearchProduct >
    )
}