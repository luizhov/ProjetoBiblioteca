const express = require("express");
const router = express.Router();
const LivroController = require("../controllers/Controller.js");


//Emprestimo
router.post("/livro/emprestar", LivroController.fazerEmprestimo);
router.get("/livro/devolver/:id", LivroController.devolver);
router.get("/livro/listaremprestimo", LivroController.listaremprestimo);
router.get("/livro/listaremprestimo/:id", LivroController.listaremprestimoid);


//Manter livro
router.post("/livro/cadastrar", LivroController.cadastrarLivro);
router.get("/livro/listar", LivroController.listarLivros);
router.get("/livro/listar/:id", LivroController.listarLivroByName);
router.get("/livro/listar/:codigo", LivroController.listarLivroByCodigo);
router.post("/livro/alterar/", LivroController.updateLivro);
router.get("/livro/deletar/:id", LivroController.deletarLivro);



//Cliente
router.post("/cliente/cadastrar", LivroController.cadastrarCliente);
router.get("/cliente/listar", LivroController.listarCliente);
router.get("/cliente/listar/:cpf", LivroController.listarClienteByCff);
router.get("/cliente/deletar/:id", LivroController.deletarCliente);
router.post("/cliente/alterar", LivroController.updateCliente);


module.exports = router;