

const productsArray = [
    {
        id: "price_1NFhGKDD7ss0oNitL3dAbofk",
        title: "Coffee",
        price: 4.99
    },{
        id: "price_1NFhHuDD7ss0oNit1eIwpIBM",
        title: "Sunglasses",
        price: 9.99
    },{
        id: "price_1NFhIYDD7ss0oNitjSQFkmsV",
        title: "Camera",
        price: 39.99,
    }
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if(productData === undefined){
        console.log('Product data does not exist');
    }
    return productData;
}

export { productsArray, getProductData };