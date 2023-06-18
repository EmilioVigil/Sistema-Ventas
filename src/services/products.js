import mock from ('../../mock.json')

export const searchProducts = async ({ search }) => {
    if (search === '') return null;

    try {
        const response = await fetch(mock);
        const json = await response.json();
        const products = json.Productos

        return products?.map(product => ({
            nombre: product.nombre,
            precio: product.precio,
            empresa: product.empresa
        }))


    } catch (e) {
        throw new Error('Error searching products')
    }


}