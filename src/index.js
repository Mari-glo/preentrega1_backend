import express from "express";
import ProductRouter from "./router/product.routes.js";
import CartRouter from "./router/carts.routes.js";

const app = express();
const PORT = 4000;
//use puerto 4000 pporque no me funcionó con 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", ProductRouter);
app.use("/api/cart", CartRouter);

app.listen(PORT, ()=>{
    console.log ( `Escuchando desde Puerto ${PORT}`);

});