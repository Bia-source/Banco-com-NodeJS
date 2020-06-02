const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

// Rotas de requisição
routes.get("/", (request, response) => {
    return response.send('requisição padrão');
})
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.buscarPorId);
routes.post("/products", ProductController.criar);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.deletar);


module.exports = routes;