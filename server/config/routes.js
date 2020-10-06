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
router.post("/cliente/cadastrar", LivroController.cadastrarCliente);
router.post("/cliente/listar", LivroController.listarCliente);
router.post("/cliente/listarbycpf", LivroController.listarClienteByCff);
router.post("/cleinte/delete", LivroController.deletarCliente);
router.post("/cliente/alterar", LivroController.updateCliente);
module.exports = router;