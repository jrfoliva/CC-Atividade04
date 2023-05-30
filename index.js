import express from "express"
import os from "os";
import Aluno from "./Modelo/Aluno.js";


const server = express();

// Aceitar requisições no formato JSON
server.use(express.json()); 

// Rotas
server.get('/', (req, res) => {
    return res.json({
        message: "Hello, you're access my API!"
    });
});

server.get("/liveness", (req, res) => {
    return res.status(200).json({
        message: "App is alive!",
        path: process.cwd(),
    });
});

server.get("/readiness", checaBancoPronto, (req, res) => {
    return res.status(200).json({
        message: "App is ready!",
        platform: os.platform(),
        version: os.version(),
        cpu: os.cpus(),
        freemem: os.freemem(),
        date: new Date().getTime()
    });
});


// Middleware para checar se banco de dados está pronto.
function checaBancoPronto(req, res, next){
    const aluno = new Aluno();
    aluno.createDataBase().then(()=> {
        return next();
    }).catch((erro) => {
        return res.json({
            message: "Preparando o banco de dados. Tente novamente! - erro: "+ erro
        });
    });
}

// Consulta por Route params também será possível.
server.get("/consulta-dados/:id?",  checaBancoPronto, (req, res) => {
    const { id }  = req.params ? req.params : '';
    const aluno = new Aluno(id);

    aluno.consulta(aluno).then((listaAlunos) => {
        return res.status(200).json(listaAlunos);
    });
});


server.get("*", (req, res) => {
    return res.status(404).json({
        message : "Desculpe, página não encontrada!" 
    });
});


const port = 3000;
server.listen(port, () => {
    console.info(`Server Up on port: ${port}`);
});