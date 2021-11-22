const express = require('express');
const app = express();

app.use(express.json());

const paes = [
    {
    id: 1,    
    nome: 'Bisnaguinha',
    preco: 10
    }
];
app.get('/paes/:id', function(req, res){
    const {id} = req.params;
    const pao = paes.find(pao => pao.id === Number(id));
    res.json(pao);
})

app.post('paes', function(req, res) {
    const {nome, preco} = req.body;
    
    const novoPao = {id: paes[paes.length -1].id + 1, nome, preco}

    paes.push(novoPao);
    res.json(novoPao);
});

app.put('/paes/:id', function(req, res){
    const { id } = req.params;
    const pao = paes.find(pao => pao.id === Number(id));
    const { nome, preco } = req.body;

    pao.nome = nome;
    pao.preco = preco;

    res.jason(pao);
})

app.listen(3000, () => console.log('O servidor ta onnnnn na porta 3000!!!!'))

