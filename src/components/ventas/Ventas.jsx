import { useState, useEffect } from "react"
import { ProductList } from "./productlist/ProductList";
import { SubTotal } from "./subTotal/SubTotal";
import { MakeSale } from "./makeSale/MakeSale";
// Styled
import { Container, SectionConfig, FormConfig, ItemForm } from "./Ventas.styled"
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
                                <input type="text" id="fecha" value={fecha} readOnly={true} />

                            </ItemForm>
                            <ItemForm>
                                <label htmlFor="venta">Punto de venta</label>
                                <input type="text" className="location" defaultValue={'SAN MARTIN 410 - LA CALERA - CÓRDOBA'} />
                            </ItemForm>
                            <ItemForm>
                                <label htmlFor="comprobante">N° Comprobante</label>
                                <input type="text" />
                            </ItemForm>
                            <ItemForm>
                                <label htmlFor="factura">T.Factura</label>
                                <select >
                                    <option >X</option>
                                    <option >A</option>
                                    <option >B</option>
                                </select>
                            </ItemForm>

                        </div>


                        <ItemForm>
                            <label htmlFor="cliente">Cliente</label>
                            <input type="text" />
                        </ItemForm>
                        <ItemForm>
                            <label htmlFor="formPago">Forma de pago</label>
                            <select >
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

                <section>
                    <SubTotal />
                </section>

                <section>
                    <MakeSale />
                </section>

            </Container >
        </>
    )
}

