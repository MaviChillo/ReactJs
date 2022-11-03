import products from '../assets/data.json'

export const getProducts = () => {
    const task = new Promise((resolve, reject) =>{
        resolve(products)
    })
    return task
}
