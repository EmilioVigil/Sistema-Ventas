// Context
import { useContext } from "react";
import { dataContext } from "../../../context/DataContext";

// Components
import { SearchBar } from "../searchBar/SearchBar";

import { v4 as uuidv4 } from 'uuid';

// Styles
import {
    Container,
    TableCell, TableHeader, TableList, TableRow, Table, ButtonX
} from "./ProductList.styled";


export function ProductList() {

    const { tableProducts, setTableProducts } = useContext(dataContext)

    const handleClick = (prod) => {

        const productId = tableProducts.find(el => el.codBarra === prod.codBarra);

        const newTable = tableProducts.filter(el => {
            return el !== productId
        })
        setTableProducts(newTable)

    }

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
                            <TableHeader></TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {/* PRODUCTOS */}
                        {
                            tableProducts ? tableProducts.map(el => {
                                return (
                                    <TableRow key={uuidv4()}>
                                        <TableCell>{el.nombre}</TableCell>
                                        <TableCell>{el.cantidad}</TableCell>
                                        <TableCell>${el.precioUnidad}</TableCell>
                                        <TableCell>${el.precioFinal}</TableCell>
                                        <TableCell>
                                            <ButtonX
                                                onClick={() => handleClick(el)}
                                            >
                                                X
                                            </ButtonX>
                                        </TableCell>
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