import {promises as fs} from 'fs'

class ProductManager {
    constructor() {
        this.path = "./src/models/product.json"
    }

    readProducts = async () =>{
        let products = await fs.readFile(this.path, "utf-8")
        return JSON.parse(products)
    }
    writeProducts = async (product) => {

        let productsOld = await this.readProducts()
        let productsAll = [...productsOld, product]
        await fs.writeFile(this.path, JSON.stringify(productsAll))
        return"Producto agregado"
    }

    getProducts = async () =>{
        return await  this.readProducts()
    }
}
export default ProductManager


//const product = new ProductManager()

//product.writeProducts()