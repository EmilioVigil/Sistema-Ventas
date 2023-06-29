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
    ModalContent,
    CloseButton,
    Title,
    Form,
    Input,
    SearchButton
} from "./ModalSearchBar.styled"

export function ModalSearchBar({ closeModal, products, tableProducts, setTableProducts, quantityProduct }) {

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
                <CloseButton onClick={closeModal}>❌</CloseButton>
                <Title>Productos</Title>
                <Form >
                    <Input type="text"
                        placeholder='Buscar producto...'
                        value={search}
                        onChange={e => handleInput(e)}

                    />
                    <SearchButton onClick={handleClick} >Buscar</SearchButton>
                </Form>
                {
                    filterProducts.length > 0 ?
                        <ListProduct products={filterProducts} closeModal={closeModal}
                            tableProducts={tableProducts} setTableProducts={setTableProducts} quantityProduct={quantityProduct}
                        />
                        : <p>No se encontraron resultados</p>
                }
            </ModalContent>
        </ModalWrapper>
    )
}