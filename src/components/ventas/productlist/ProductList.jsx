import { SearchBar } from "../searchBar/SearchBar";

import {
    Container,
    TableCell, TableHeader, TableList, TableRow, Table
} from "./ProductList.styled";


export function ProductList() {

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

                    </tbody>
                </Table>
            </TableList>

        </Container>
    )
}