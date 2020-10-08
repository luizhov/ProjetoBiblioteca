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
        
       var result =  await livro.find({"Status":"DISPONÍVEL"});
        res.status(200).json(result);

      }catch(error){
        console.log(error);
        res.status(500).json(error);
      }
  }

  async listarLivroByName(req,res){
    try{
      
      var result =await livro.findOne({"Titulo": req.params.id});
      res.status(200).json(result);

    }catch(error){
      console.log(error);
      res.status(500).json(error);
    }
}

async listarLivroByCodigo(req,res){
  try{
    var result =await cliente.findOne({"Codigo": req.params.codigo});
      res.status(200).json(result);
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
}

async updateLivro(req,res){
  try{
    
    var result =await livro.findOne({"_id": req.body._id});
    console.log(result);
    var result = await result.updateOne(req.body);
    res.status(200).json(result);

  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
}
async deletarLivro(req,res){
  try{
    
    
    var result = await livro.findOneAndDelete({"_id": req.params.id});
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
  async deletarCliente(req,res){
    try{
      
      
      var result = await cliente.findOneAndDelete({"_id": req.params.id});
      res.status(200).json(result);
  
    }catch(error){
      console.log(error);
      res.status(500).json(error);
    }
  }
  async updateCliente(req,res){
    try{
      
      var result =await cliente.findOne({"_id": req.body._id});
      var result = await result.updateOne(req.body);
      res.status(200).json(result);
  
    }catch(error){
      console.log(error);
      res.status(500).json(error);
    }
  }
  async listarClienteByCff(req,res){
    try{
      
      var result =await cliente.findOne({"Cpf": req.params.cpf});
      res.status(200).json(result);

    }catch(error){
      console.log(error);
      res.status(500).json(error);
    }
}
async listarCliente(req,res){
  try{
    
   var result =  await cliente.find();
    res.status(200).json(result);

  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
}

//Emprestimo
async devolver(req,res){
  
  try {
           
      
    var a =await emprestimo.findByIdAndUpdate({"_id":req.params.id}, {"status":"devolvido"});
    
    var result = await emprestimo.findOne({"_id": req.params.id});
    
          
    var c =  await livro.findByIdAndUpdate({"_id": result.livro},{"Status":"DISPONÍVEL"})

    res.status(200).json({"sucesso":"a"});
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }


}
    async fazerEmprestimo(req, res) {
        
        
      
      
        
           
          
 var result = await livro.findByIdAndUpdate({"_id": req.body.livro},{Status:"EMPRESTADO"});
       

  

try{
          await emprestimo.create(req.body);
          res.status(200).json({"sucesso":"a"});
        } catch (error) {
          console.log(error);
          res.status(500).json(error);
        }
    }

    async listaremprestimo(req,res){
      try{
        
       var result =  await emprestimo.find({"status":"pendente"});
        res.status(200).json(result);
    
      }catch(error){
        console.log(error);
        res.status(500).json(error);
      }
    }
    async listaremprestimoid(req,res){
      try{
        
       var result =  await cliente.findById({"_id": req.params.id});
        res.status(200).json(result);
    
      }catch(error){
        console.log(error);
        res.status(500).json(error);
      }
    }

}
module.exports = new LivroController();