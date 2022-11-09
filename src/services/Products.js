import products from '../assets/data.json'

export const getProducts = (idCategoria) => {
    const task = new Promise((resolve, reject) =>{
        console.log('aaaaaaaaaaaaaaaaa',idCategoria)
        resolve(idCategoria?products.filter(product => product.categoria === Number(idCategoria)):products)
    })
    return task
}

export const getProduct = (idProduct) => {
    const task = new Promise((resolve, reject) =>{
        resolve(products.find(product => product.id === Number(idProduct)))
    })
    return task
}