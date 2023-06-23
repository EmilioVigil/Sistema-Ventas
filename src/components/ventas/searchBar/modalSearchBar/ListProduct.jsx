import { ListContainer } from "./ListProduct.styled"

export function ListProduct({ products, closeModal }) {

    const handleClick = (e) => {
        e.preventDefault()

        // Cuando agregamos un producto cerramos la modal
        closeModal()
    }

    return (
        <>
            {
                products.map(el => {
                    return (
                        <ListContainer key={el.nombre}>
                            <h2>{el.nombre}</h2>
                            <p>{el.empresa}</p>
                            <p>{el.precio}</p>
                            <button onClick={handleClick} >Agregar</button>
                        </ListContainer>
                    )
                })
            }

        </>
    )

}