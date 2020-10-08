const mongoose = require("mongoose");
const livro = require("./Livro.js");
const cliente = require("./Cliente.js");

const emprestimoDeLivro = new mongoose.Schema({
    DataEmprestimo:{
        type: Date,
        required: [true, "O campo data é obrigatório."],
        default: Date.now,
    },
    DataDevolucao:{
        type: Date,
        required: [true],
    },
    livro: {
        type : String,
        required : [true , "O Título do livro é obrigatório."]
    },
    cliente: {
        type : String,
        required : [true,"O Cpf do cliente é obrigatório"]
    }  ,
    status:{
        type:String,
        enum: ['devolvido','pendente']
        
    }

})

module.exports = mongoose.model("Emprestimo", emprestimoDeLivro);