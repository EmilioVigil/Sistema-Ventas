import { useState } from "react"
import mock from '../../../../mock.json'

export function ProductList (){
    
    // Estado para almacenar los productos
    const [products, setProducts] = useState([]);

    // Estado para manejar las cantidades
    const [quantityProduct, setQuantityProduct] = useState(1)

    // Estado para almacenar la entrada de busqeuda
    const [searchProduct, setSearchProduct] = useState('');
    
    const addProduct = (productName, quantity, price)=>{
        const product = {
            name :productName,
            quantity : quantity,
            price : price,
            unitPrice : price,
            totalPrice : price * quantity
        }
        setProducts([...products, product])
    }

    const handleSearch = (e)=>{
        setSearchProduct(e.target.value)
    }

    const handleQuantityProduct = (e)=>{
        setQuantityProduct(e.target.value)
    }
    return(
        <>
            <div>
                <form action="">
                <input 
                type="number" 
                value={quantityProduct}
                onChange={handleQuantityProduct}
                />
      <input
        type="text"
        placeholder="Buscar producto"
        value={searchProduct}
        onChange={handleSearch}
      />
                </form>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio por unidad</th>
            <th>Precio final</th>
          </tr>
        </thead>
        <tbody>
                {/* PRODUCTOS */}
                {
                    mock.productos.map((product, index) =>{
                        return(
                            <tr key={index}>
                                <td>{product.nombre}</td>
                                <td>${product.precio}</td>
                                <td>{product.stock}</td>
                            </tr>
                        )
                    })
                }
        </tbody>
      </table>
      <button >Buscar</button>
      <button>Agregar</button>
    </div>
        </>
    )
}