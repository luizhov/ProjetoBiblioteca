const mongoose = require("mongoose");

const livro = new mongoose.Schema({
    Titulo:{
        type: String,
        required: [true, "O campo nome do livro é obrigatório."]
    },
    Autor:{
        type: String,
        required: [true, "O campo autor é obrigatório."]
    },
    AnoLancamento:{
        type: Number,
        required: [true, "O Ano de Lançamento é obrigatório."]
    },
    Editora:{
        type: String,
        required: [true, "A editora é obrigatória."]
    },
    Genero:{
        type: String,
        required: [true, "O gênero do livro é obrigatório."]
    },
    Codigo:{
        type: String,
        required: [true, "O código do livro é obrigatório."]
    },
    Status:{
        type: String,
        
        default: "DISPONÍVEL"
    }
});

module.exports = mongoose.model("livro",livro);