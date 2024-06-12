import fs from 'fs'

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

export {getTodosLivros}