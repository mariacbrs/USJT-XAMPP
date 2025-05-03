const express = require("express");
const knex = require("knex");
const errors = require("http-errors");
const createHttpError = require("http-errors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const connLoja = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        user: "root",
        password: "mcbrs",
        database: "loja"
    }
});

const connCliente = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        user: "root",
        password: "mcbrs",
        database: "cliente"
    }
});

app.get("/", (req, res) => {
    res.json({ resposta: "Welcome to my store" })
});

app.get("/produtos", (req, res, next) => {
    connLoja("produto")
        .orderBy("id")
        .then(dados => res.json(dados))
        .catch(next);
});

app.get("/produtos/:idProd", (req, res, next) => {
    const id = req.params.idProd;
    connLoja("produto")
        .where("id", id)
        .first()
        .then(dados => {
            if (!dados) {
                return next(errors(404, "The product you are searching for doesn't exist"));
            }
            res.json(dados);
        })
        .catch(next);
});

app.post("/produtos", (req, res, next) => {
    connLoja("produto")
        .insert(req.body)
        .then(dados => {
            if (!dados) {
                return next(errors(400, "It was not possible to add the product"))
            }
            res.status(201).json({
                resposta: "Product was added",
                id: dados[0]
            });
            //res.status(201).json( dados )
        })
        .catch(next);
});

app.put("/produtos/:idProd", (req, res, next) => {
    const id = req.params.idProd;
    connLoja("produto")
        .where("id", id)
        .update(req.body)
        .then(dados => {
            if (!dados) {
                return next(errors(404, "Product was not found"))
            }
            res.status(200).json({
                resposta: "Product was edited",
                dados: dados
            });
        })
        .catch(next);
});

app.delete("/produtos/:idProd", (req, res, next) => {
    const id = req.params.idProd;
    connLoja("produto")
        .where("id", id)
        .delete()
        .then(dados => {
            if (!dados) {
                return next(errors(404, "Product was not found"))
            }
            res.status(200).json({
                resposta: "Product was deleted",
                dados: dados
            });
        })
        .catch(next);
});

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            erro: err.message || "Internal error on the server!"
        })
})

//Exercício: Criar no banco de dados a tabela cliente, se ela ainda não existe, que deve conter as colunas id, nome, altura criar um endpoint para:
//  -> retornar os clientes ordenados pela altura
app.get("/clientes", (req, res, next) => {
    connCliente("pessoa")
        .orderBy("altura")
        .then(dados => res.json(dados))
        .catch(next);
});

//  -> inserir um novo cliente
app.post("/clientes", (req, res, next) => {
    connCliente("pessoa")
        .insert(req.body)
        .then(dados => {
            if (!dados) {
                return next(errors(400, "It was not possible to add new person"))
            }
            res.status(201).json({
                resposta: "Person was added",
                id: dados[0]
            });
            //res.status(201).json( dados )
        })
        .catch(next);
});

//  -> editar um cliente
app.put("/clientes/:idPessoa", (req, res, next) => {
    const id = req.params.idPessoa;
    connCliente("pessoa")
        .where("id", id)
        .update(req.body)
        .then(dados => {
            if (!dados) {
                return next(errors(404, "Person was not found"))
            }
            res.status(200).json({
                resposta: "Person was edited",
                dados: dados
            });
        })
        .catch(next);
});

//  -> excluir um cliente
app.delete("/clientes/:idPessoa", (req, res, next) => {
    const id = req.params.idPessoa;
    connCliente("pessoa")
        .where("id", id)
        .delete()
        .then(dados => {
            if (!dados) {
                return next(errors(404, "Product was not found"))
            }
            res.status(200).json({
                resposta: "Product was deleted",
                dados: dados
            });
        })
        .catch(next);
});

app.listen(PORT, () => {
    console.log(`Store is being executed in http://localhost:${PORT}`)
});
















