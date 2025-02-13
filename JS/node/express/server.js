const express = require('express');
const app =express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Formluario</button>
    </form>
  `);
}); 

app.get('')

app.post('/', (req, res) => {
  res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
  console.log('Acesasr http://localhost:3000')
  console.log('Servidor rodando na porta 3000')
})
