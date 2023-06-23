import {
    useState
} from "react"

// Components
import {
    ListProduct
} from "./ListProduct"

// STYLES
import {
    ModalWrapper,
    ModalContent
} from "./ModalSearchBar.styled"

export function ModalSearchBar({ closeModal, products, tableProducts, setTableProducts }) {

    const [search, setSearch] = useState('')

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
                {
                    filterProducts.length > 0 ?
                        <ListProduct products={filterProducts} closeModal={closeModal} />
                        : <p>No se encontraron resultados</p>
                }
            </ModalContent>
        </ModalWrapper>
    )
}