const express = require("express");
const router = express.Router();
const LivroController = require("../controllers/LivroController.js");

router.post("/livro/emprestar", LivroController.cadastrarLivro);
//router.get("/:cycleId", LivroController.getById);
//router.post("/", LivroController.store);

module.exports = router;