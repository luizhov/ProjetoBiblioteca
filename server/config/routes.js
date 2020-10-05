const express = require("express");
const router = express.Router();
const LivroController = require("../controllers/Controller.js");
//Emprestimo
router.post("/livro/emprestar", LivroController.fazerEmprestimo);





//Manter livro
router.post("/livro/cadastrar", LivroController.cadastrarLivro);
router.get("/livro/listar", LivroController.listarLivros);
router.get("/livro/listar/:id", LivroController.listarLivroByName);
router.post("/livro/alterar/", LivroController.updateLivro);
router.get("/livro/deletar/:id", LivroController.deletarLivro);


//Cliente
router.post("/livro/cadastrarCliente", LivroController.cadastrarCliente);

module.exports = router;