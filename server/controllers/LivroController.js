const emprestimo = require("../models/emprestimoDeLivro.js");


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
           
      
          
          await emprestimo.create(req.body);
          res.status(200).json({"sucesso":"a"});
        } catch (error) {
          res.status(500).json(error);
        }
    }
}
module.exports = new LivroController();