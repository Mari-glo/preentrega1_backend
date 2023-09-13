import express from "express";
import ProductManager from "./controllers/ProductManager.js";

const product = new ProductManager();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) =>{
    res.send(await product.getProducts())
})
app.get("/products/:id", async (req, res) =>{
    let id = req.params.id
    res.send(await product.getProductsById(id))
})


app.post("/products", async (req, res) =>{
    let newProduct = req.body
    res.send (await product.addProducts(newProduct))

})


app.listen(PORT, ()=>{
    console.log ( `Escuchando desde Puerto ${PORT}`);

});