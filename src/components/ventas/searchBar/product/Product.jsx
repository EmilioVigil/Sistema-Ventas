

export function ListOfProduct({ products }) {
    return (
        <ul>
            {
                products.map(product => {
                    return (
                        <li key={product.nombre}>
                            <h3>{product.nombre}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}