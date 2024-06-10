import express from 'express'

const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send("Cris Sansi 2")
})

app.listen(port, () =>{
    console.log(`Estudando na porta ${port}`)
})