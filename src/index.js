import express, {response} from "express"
import ProductManager from "./controllers/productManager.js";

const product = new ProductManager()

const app = express ()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/products", async (req, res) =>{
    res.send(await  product.getProducts())
})
app.post("/products", async (req, res) => {
    let newProduct = req.body
    res.send(await product.writeProducts(newProduct))
})

app.listen(PORT,() => {
    console.log(`servidor Express Puerto ${PORT}`)
})