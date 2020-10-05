const mongoose = require("mongoose");
const livro = require("./Livro.js");
const cliente = require("./Cliente.js");

const emprestimoDeLivro = new mongoose.Schema({
    DataEmprestimo:{
        type: Date,
        required: [true, "O campo data é obrigatório."],
        default: Date.now,
    },
    DataDevolução:{
        type: Date,
        required: [true],
    },
    livro: [livro],
    cliente: [cliente]  

})

module.exports = mongoose.model("Emprestimo", emprestimoDeLivro);