import express from 'express'
import routerLivros from './routes/livrosRouter.js'

const app = express()
app.use(express.json())

const port = 8000

// Rota GET para a raiz a rota principal
app.use('/livros', routerLivros);

// Iniciar o servidor
app.listen(port, () =>{
    console.log(`Estudando na porta ${port}`)
})