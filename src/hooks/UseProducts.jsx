import { useMemo, useRef, useState } from "react";
import { searchProducts } from "../services/products";

export function UseProducts({ search }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const previousSearch = useRef(search)

    const getProducts = useMemo(() => {
        return async ({ search }) => {
            if (search === previousSearch.current) return
            try {
                setLoading(true)
                previousSearch.current = search;
                const newProducts = await searchProducts({ search })
                setProducts(newProducts);
                setLoading(false)
            } catch (e) {
                setError(e.message)
            }
        }
    })

    return { products: getProducts, loading }

}