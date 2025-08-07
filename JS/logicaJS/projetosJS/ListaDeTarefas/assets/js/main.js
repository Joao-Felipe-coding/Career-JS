const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}


function criaTarefa(textoDoInput) {
  function criaLi() {
    const li = document.createElement('li'); 
    return li;
  }
  const lista = criaLi();
  lista.innerHTML = textoDoInput;
  tarefas.appendChild(lista);
  
  function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
  }
  limpaInput();
  
  function btnApagarTarefa(lista) {
    lista.innerHTML += ' ';
    const btnApagarTarefa = document.createElement('button');
    btnApagarTarefa.innerHTML = 'Apagar'; 
    btnApagarTarefa.setAttribute('class', 'apagar');
    btnApagarTarefa.setAttribute('title', 'apagar esta tarefa');
    lista.appendChild(btnApagarTarefa);
  }
  btnApagarTarefa(lista);
  salvarTarefas();
}

//envio de dados
btnTarefa.addEventListener('click', function() {
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function (event) {
  if(event.keyCode==13){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

document.addEventListener('click', function(event){
  const el = event.target;
  if(el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefas();
  }
});

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  
  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();