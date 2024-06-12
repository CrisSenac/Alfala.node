# Criando primeiro projeto em Node.js com ES6

## Criando a pasta e acessando pelo Visual Studio Code
01) Criar uma pasta chamada **alfala-books**, ou outro nome que achar conveniente para seu projeto.

## Criando a aplicação pelo terminal
02) Quando o terminal aparecer na parte inferior da sua IDE, escreva nele o comando: 

Este comando servirá para iniciarmos o arquivo packstage.json com as definições do projeto.

```bash
npm init.
```

## Fazendo seu Olá mundo
03) No mesmo terminal do passo anterior, rode o comando: 
npm install express para instalar o Express que irá nos auxiliar na criação da nossa API.
04) Criar um arquivo chamado app.js na pasta raiz do projeto.
05) No arquivo criado, escreva o seguinte código.
```
import express from 'express';
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Olá mundo da leitura!')
})

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})
```
Rodando sua aplicação
06) Pelo terminal rodar o comando node app.js
07) Pelo seu navegador de internet acessar o link http://localhost:8000

## Instalando o Nodemon 

08) Pelo terminal rodar o comando npm install nodemon 
09) No package.json acrescente 
```
, 
    "start": "nodemon app.js localhost 8000"
    "type": "module",
```
10) Pelo terminal rodar o comando npm start

## Entendo o conceito de API 

__API__ - Uma API (Application Programming Interface) é uma interface que define as formas pelas quais um software se comunica e interage com outros softwares. Em outras palavras, uma API é um conjunto de regras e protocolos que permitem que diferentes aplicações se comuniquem e troquem dados entre si.

Algumas características-chave das APIs:

- __Padronização__: As APIs fornecem um conjunto padronizado de regras e formatos que devem ser seguidos para que a comunicação entre diferentes sistemas ocorra de maneira bem-sucedida.

- __Abstração__: As APIs escondem a complexidade dos sistemas subjacentes, permitindo que os desenvolvedores interajam com eles de uma maneira simples e intuitiva.

- __Reutilização__: As APIs possibilitam a reutilização de funcionalidades já existentes em outros sistemas, evitando a necessidade de reinventar a roda.

- __Interoperabilidade__: As APIs permitem que aplicações diferentes, desenvolvidas em plataformas e linguagens distintas, se comuniquem e troquem informações.

Exemplos comuns de APIs incluem as APIs de redes sociais (como a API do Twitter), APIs de mapas (como a API do Google Maps) e APIs de pagamento (como a API do PayPal). Essas APIs permitem que outros aplicativos e serviços se integrem e utilizem suas funcionalidades.

## Entendo de rotas

**Rotas**, no contexto de uma API, são os caminhos ou endpoints que definem como os clientes (aplicações que consomem a API) podem acessar e interagir com os recursos disponibilizados pela API.

As rotas são normalmente definidas usando um padrão de URL (Uniform Resource Locator) que segue uma estrutura específica, como:

- http://api.exemplo.com/v1/users 
- http://api.exemplo.com/v1/products
- http://api.exemplo.com/v1/orders

##  Instalando o postman
Iremos usar esta ferramenta para fazer nossas requisições de teste na nossa API

11) Entrar no site do postman; https://www.postman.com/
12) Baixar a versão para seu respectivo sistema operacional;
13) Abrir o app instalado e clicar no botão "Skip and go to the APP".