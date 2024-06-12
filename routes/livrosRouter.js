import { getLivro } from '../controller/livroController.js';
import {Router} from 'express'

const router = Router();

// GET - Retornar livros
router.get('/', getLivro)

// POST - Criar um livro
router.post('/', (req, res) => {
    res.send('Estou na rota Post')
})

// PATCH - Atualizar o livro
router.patch('/', (req, res) => {
    res.send('Estou na rota Patch')
})

// DELETE - Apagar um livro
router.delete('/', (req, res) => {
    res.send('Estou na rota Delete')
})

export default router;