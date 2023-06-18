import { useState } from "react"
import mock from '../../../../mock.json'
import { SearchBar } from "../searchBar/SearchBar";

import {
    Container,
    TableCell, TableHeader, TableList, TableRow, Table
} from "./ProductList.styled";


export function ProductList() {
    // // AÑADIR PRODUCTOS AL ESTADO
    // const addProduct = (productName, quantity, price) => {
    //     const product = {
    //         name: productName,
    //         quantity: quantity,
    //         price: price,
    //         unitPrice: price,
    //         totalPrice: price * quantity
    //     }
    //     setProducts([...products, product])
    // }
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
                        <TableRow>
                            <TableCell>Coca-cola x500</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>290</TableCell>
                            <TableCell>300</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Coca-cola x500</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>290</TableCell>
                            <TableCell>300</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Coca-cola x500</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>290</TableCell>
                            <TableCell>300</TableCell>

                        </TableRow>
                    </tbody>
                </Table>
            </TableList>

        </Container>
    )
}