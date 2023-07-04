import { useState, useContext } from 'react'
import { dataContext } from '../../../context/DataContext';
import { ModalSearchBar } from './modalSearchBar/ModalSearchBar';

import {
    SectionSearchProduct,
    InputQuantity,
    InputSearchBar
} from './SearchBar.styled'

export function SearchBar() {

    // PRODUCTOS DEL CONTEXT
    const { products, tableProducts, setTableProducts } = useContext(dataContext)

    // Estado para manejar las cantidades
    const [quantityProduct, setQuantityProduct] = useState(1)

    // Estado para almacenar la entrada de busqueda
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

    // Agregamos productos a la tableProducts
    const addProduct = (e) => {
        e.preventDefault();
        if (!searchProduct) return console.log('Elemento vacio')
        if (quantityProduct <= 0) return alert('La cantidad no puede ser 0 o menor')

        const filterProduct = products.find(p => p.codBarra === searchProduct)

        const newObjet = {
            codBarra: filterProduct.codBarra,
            nombre: filterProduct.nombre,
            cantidad: quantityProduct,
            precioUnidad: filterProduct.precio,
            precioFinal: filterProduct.precio * quantityProduct
        }
        setTableProducts([...tableProducts,
            newObjet
        ])

    }


    return (
        <SectionSearchProduct>
            <form >
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
            <button onClick={openModal} >🔎</button>
            <button onClick={addProduct} > ✔ </button>
            {
                isOpenModal && (
                    < ModalSearchBar
                        closeModal={closeModal}
                        products={products}
                        tableProducts={tableProducts}
                        setTableProducts={setTableProducts}
                        quantityProduct={quantityProduct}
                    />
                )
            }
        </SectionSearchProduct >
    )
}