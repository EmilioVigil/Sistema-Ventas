import { useState, useContext, useEffect } from "react"
import { dataContext } from "../../../context/DataContext"

export function SubTotal() {

    const { tableProducts, setTableProducts } = useContext(dataContext)
    const { total, setTotal } = useState(20);

    return (
        <>
            <h3>Total:</h3>
            <div>
                ${total}
            </div>
        </>
    )
}