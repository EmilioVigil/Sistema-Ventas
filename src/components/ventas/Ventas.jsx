// Styled
import { Container, SectionConfig, FormConfig, ItemForm } from "./Ventas.styled"
import { useState, useEffect } from "react"
import { ProductList } from "./productlist/ProductList";

export function Ventas() {
    const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFecha(new Date().toISOString().split("T")[0]);
        }, 86400000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <h1>Ventas</h1>
            <Container>
                <SectionConfig>
                    <FormConfig>
                        <div id="information" >
                            <ItemForm>
                                <label htmlFor="fecha">Fecha</label>
                                <input type="text" id="fecha" value={fecha} />

                            </ItemForm>
                            <ItemForm>
                                <label htmlFor="">Punto de venta</label>
                                <input type="text" defaultValue={'SAN MARTIN 410 - LA CALERA - CÓRDOBA'} />
                            </ItemForm>
                            <ItemForm>
                                <label htmlFor="">N° Comprobante</label>
                                <input type="text" />
                            </ItemForm>
                            <ItemForm>
                                <label htmlFor="">T.Factura</label>
                                <select name="" id="">
                                    <option >X</option>
                                    <option >A</option>
                                    <option >B</option>
                                </select>
                            </ItemForm>

                        </div>


                        <ItemForm>
                            <label htmlFor="">Cliente</label>
                            <input type="text" />
                        </ItemForm>
                        <ItemForm>
                            <label htmlFor="">Forma de pago</label>
                            <select name="" id="">
                                <option >Efectivo</option>
                                <option >Debito</option>
                                <option >Credito</option>
                            </select>
                        </ItemForm>
                    </FormConfig>
                </SectionConfig>

                <section>
                    <ProductList />
                </section>
            </Container >
        </>
    )
}

