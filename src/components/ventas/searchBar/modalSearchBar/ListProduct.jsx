import { ListContainer } from "./ListProduct.styled"

export function ListProduct({ products }) {
    return (
        <>
            {
                products.map(el => {
                    return (
                        <ListContainer key={el.nombre}>
                            <h2>{el.nombre}</h2>
                            <p>{el.empresa}</p>
                            <p>{el.precio}</p>
                            <button>Agregar</button>
                        </ListContainer>
                    )
                })
            }

        </>
    )

}