const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    
    async index(req,res){
        const products = await Product.find();
        return res.json(products);
    },

    async buscarPorId(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async criar(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.json(product);
    },

    async deletar(req, res){
        await Product.findOneAndDelete({_id: req.params.id});
        return res.send();    
    }

};