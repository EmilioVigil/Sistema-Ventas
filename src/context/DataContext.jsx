import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const dataContext = createContext()



export const DataProvider = ({ children }) => {

    // ESTADOS GLOBALES
    const [products, setProducts] = useState([]);
    const [tableProducts, setTableProducts] = useState([])
    const [subTotal, setSubtotal] = useState(0)

    // OBTENEMOS INFORMACION DE PRODUCTOS
    useEffect(() => {
        axios('mock.json')
            .then(response => {
                setProducts(response.data.Productos)
            })
        }, [])
    
    // CALCULAR SUBTOTAL
    const calculateSubTotal = () => {
        let total = 0;
        tableProducts.forEach(producto => {
            total += producto.precioFinal;
        });
        setSubtotal(total);
    };
    
    useEffect(() => {
        calculateSubTotal()
    }, [tableProducts])

    // REALIZAMOS VENTA - CANCELAMOS VENTA
    const makeSale = () => {
        setTableProducts([])
        setSubtotal(0)
    }
    const cancelSale = () => {
        setTableProducts([])
        setSubtotal(0)
    }

    return (
        <dataContext.Provider value={{ products, tableProducts, setTableProducts, subTotal, makeSale, cancelSale }}  >
            {
                children
            }
        </dataContext.Provider>
    )
}