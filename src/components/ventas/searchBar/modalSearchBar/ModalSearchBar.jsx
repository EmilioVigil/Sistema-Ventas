// Importamos el contexto
import { useContext, useState } from "react"
import { dataContext } from "../../../../context/DataContext"
import { ListProduct } from "./ListProduct"
// STYLES
import { ModalWrapper, ModalContent } from "./ModalSearchBar.styled"

export function ModalSearchBar({ closeModal }) {

    const [search, setSearch] = useState('')

    // PRODUCTOS DEL CONTEXT
    const { products } = useContext(dataContext)

    // Filtrado de productos para el search
    const [filterProducts, setFilterProducts] = useState([]);

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const filter = products.filter(el =>
            el.nombre.toLowerCase().includes(search.toLowerCase())
        )
        setFilterProducts(filter)
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
                <main>
                    {
                        filterProducts.length > 0 ?
                            <ListProduct products={filterProducts} />
                            : <p>No se encontraron resultados</p>
                    }
                </main>
            </ModalContent>
        </ModalWrapper>
    )
}