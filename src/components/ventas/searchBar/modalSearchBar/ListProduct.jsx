import {
    Table,
    TableHeader,
    TableRow,
    TableCell
} from "./ListProduct.styled"

export function ListProduct({ products, closeModal, tableProducts, setTableProducts, quantityProduct }) {

    const handleClick = (item) => {
        const newProduct = {
            codBarra: item.codBarra,
            nombre: item.nombre,
            cantidad: quantityProduct,
            precioUnidad: item.precio,
            precioFinal: item.precio * quantityProduct
        }

        setTableProducts([...tableProducts,
            newProduct
        ])
        closeModal()
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Producto</TableHeader>
                        <TableHeader>Empresa</TableHeader>
                        <TableHeader>Precio</TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.nombre}</TableCell>
                            <TableCell>{item.empresa}</TableCell>
                            <TableCell>${item.precio}</TableCell>
                            <TableCell>
                                <button onClick={() => handleClick(item)} >Agregar</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </>
    )

}