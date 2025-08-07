const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

//const pessoas = [
//  { nome: 'João' },
//  { nome: 'Nicoli' },
//  { nome: 'Felipe' },
//  { nome: 'Alice' },
//];
//const json = JSON.stringify(pessoas, '', 2);
//escrever(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados)
  dados.forEach(val => console.log(val.nome));
}

leArquivo(caminhoArquivo);
