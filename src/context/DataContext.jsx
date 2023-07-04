import { createContext, useState, useEffect } from "react";
import axios from 'axios'
// Utilizo un contexto donde voy almacenar todos mis productos.

export const dataContext = createContext()



export const DataProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [tableProducts, setTableProducts] = useState([])
    const [subTotal, setSubtotal] = useState(0)

    const calcularSubtotal = () => {
        let total = 0;
        tableProducts.forEach(producto => {
            total += producto.precioFinal;
        });
        setSubtotal(total);
    };

    useEffect(() => {
        axios('mock.json')
            .then(response => {
                setProducts(response.data.Productos)
            })
    }, [])

    useEffect(() => {
        calcularSubtotal()
    }, [tableProducts])

    return (
        <dataContext.Provider value={{ products, tableProducts, setTableProducts, subTotal }}  >
            {
                children
            }
        </dataContext.Provider>
    )
}