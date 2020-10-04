const emprestimo = require("../models/Emprestimo.js");

class LivroController{
    async fazerEmprestimo(req, res){
        try{
            var dataEmprestimo = new Date();
            var dataDevolucao = dataEmprestimo.setDate(dataEmprestimo.getDate()+7);
            res.status('Data de devolução prevista para dia: ' + dataDevolucao)
        }catch(error){
            res.status('Livro já emprestado.');
        }
    }

    async cadastrarLivro(req, res) {
        try {
          await Livro.create(req.body);
        } catch (error) {
          res.status(500).json(error);
        }
    }
}
module.exports = new LivroController();