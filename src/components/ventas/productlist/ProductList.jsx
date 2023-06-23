// Context
import { useContext } from "react";
import { dataContext } from "../../../context/DataContext";

// Components
import { SearchBar } from "../searchBar/SearchBar";

// Styles
import {
    Container,
    TableCell, TableHeader, TableList, TableRow, Table
} from "./ProductList.styled";


export function ProductList() {

    const { tableProducts, setTableProducts } = useContext(dataContext)

    return (
        <Container>

            <SearchBar />


            <TableList>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeader>Producto</TableHeader>
                            <TableHeader>Cantidad</TableHeader>
                            <TableHeader>Precio por unidad</TableHeader>
                            <TableHeader>Precio final</TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {/* PRODUCTOS */}
                        {
                            tableProducts ? tableProducts.map(el => {
                                return (
                                    <TableRow key={el.codBarra}>
                                        <TableCell>{el.nombre}</TableCell>
                                        <TableCell>{el.cantidad}</TableCell>
                                        <TableCell>${el.precioUnidad}</TableCell>
                                        <TableCell>${el.precioFinal}</TableCell>
                                    </TableRow>
                                )
                            })
                                : <p>No hay productos</p>
                        }
                    </tbody>
                </Table>
            </TableList>

        </Container >
    )
}