import { createContext, useState, useEffect } from "react";
import axios from 'axios'
// Utilizo un contexto donde voy almacenar todos mis productos.

export const dataContext = createContext()

export const DataProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios('mock.json')
            .then(response => {
                setProducts(response.data.Productos)
            })
    }, [])

    return (
        <dataContext.Provider value={{ products }} >
            {
                children
            }
        </dataContext.Provider>
    )
}