const emprestimo = require("../models/emprestimoDeLivro.js");
const livro = require("../models/Livro.js");
const cliente = require("../models/Cliente.js");

class LivroController{
  //Livro
    async cadastrarLivro(req,res){
        try{
          
          var result = await livro.create(req.body);
          res.status(200).json(result);

        }catch(error){
          console.log(error);
          res.status(500).json(error);
        }
    }
    async listarLivros(req,res){
      try{
        
       var result =  await livro.find();
        res.status(200).json(result);

      }catch(error){
        console.log(error);
        res.status(500).json(error);
      }
  }
  async listarLivroByName(req,res){
    try{
      
      var result =await livro.findOne({"Título": req.params.id});
      res.status(200).json(result);

    }catch(error){
      console.log(error);
      res.status(500).json(error);
    }
}

async updateLivro(req,res){
  try{
    
    var result =await livro.findOne({"Título": req.body.Título});
    var result = await result.updateOne(req.body);
    res.status(200).json(result);

  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
}
async deletarLivro(req,res){
  try{
    
    
    var result = await livro.findOneAndDelete({"Título": req.params.id});
    res.status(200).json(result);

  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
}

//Cliente
    async cadastrarCliente(req,res){
      try{
        cliente.create(req.body);
        res.status(200).json({"sucesso":"a"});

      }catch{
        res.status(500).json(error);
      }
  }

//Emprestimo
    async fazerEmprestimo(req, res) {
        
        
      
      
        try {
           
      
          
          await emprestimo.create(req.body);
          res.status(200).json({"sucesso":"a"});
        } catch (error) {
          res.status(500).json(error);
        }
    }
}
module.exports = new LivroController();