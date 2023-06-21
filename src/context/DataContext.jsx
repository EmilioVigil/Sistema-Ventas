import { createContext, useState, useEffect } from "react";


export const dataContext = createContext();


export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(mock.json)
            .then(response => response.json())
            .then(setData(data.Productos))
    }, [])

    return (
        <dataContext.Provider value={{ data, setData }} >
            {
                children
            }
        </dataContext.Provider>
    )
}