import { getTodosLivros, getLivroPorId } from '../service/livroService.js'

export const getLivros = (req, res) => {
    try {
    const livros = getTodosLivros();
    res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getLivro = (req, res) =>{
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)        
        res.send(livro)

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}