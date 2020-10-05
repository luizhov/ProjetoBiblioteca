const mongoose = require("mongoose");

const cliente = new mongoose.Schema({
    Nome:{
        type: String,
        required: [true, "O campo nome do livro é obrigatório."]
    },
    Cpf:{
        type: String,
        required: [true, "O campo cpf é obigatório."]
    }
});

module.exports = mongoose.model("cliente",cliente);