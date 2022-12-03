let listaTarefas = [
    { id: 1, tarefa: "Estudar Linguagens de programacao", tempo: "60", feita: false },
];

function addTarefa(tarefa) {
    const NTarefa = document.getElementById("tarefa").value
    const tempo = document.getElementById("tempo").value
    if (NTarefa != "" && tempo != "") {
        listaTarefas.push(tarefa)
        renderizarTarefas()
        limparCampos()
    } else {
        alert("Por favor preencha todos os campos")
    }
}

function removerTarefa(id) {
    listaTarefas = listaTarefas.filter(tarefa => tarefa.id !== id);
    renderizarTarefas();
}

function fazerTarefa(id, botao) {
    listaTarefas = listaTarefas.map((tarefa) => {
        if (tarefa.id === id) {
            tarefa.feita = !tarefa.feita;
        }
        return tarefa;
    });
    if (botao.innerText === 'Fazer') {
        botao.innerText = 'Desfazer';
        botao.classList.remove('btn-warning');
        botao.classList.add('btn-success');
    } else {
        botao.innerText = 'Fazer';
        botao.classList.remove('btn-success');
        botao.classList.add('btn-warning');
    }
}

function renderizarTarefas() {
    let listatarefa = document.getElementById('listatarefa');
    listatarefa.innerHTML = "";

    let Botoes = document.getElementById("Botoes")
    Botoes.innerHTML = ""
    
    listaTarefas.map((txt) => {
        let li = document.createElement('div');
        
        let l2 = document.createElement("div")
        li.innerHTML = txt.tarefa;
        li.innerHTML += "//Tempo: " + txt.tempo + "  minutos"
        
        if (txt.feita === false) {

            l2.innerHTML += `<button type="button"
                         class="btn btn-warning ml-3" 
                         onclick="fazerTarefa(${txt.id},this)">
                         Fazer
                         </button>`
            l2.innerHTML += `<button type="button" 
                         class="btn btn-danger ml-3" 
                         onclick="removerTarefa(${txt.id})">
                         Remover
                         </button>`;

        } else {
            l2.innerHTML += `<button type="button"
                             class="btn btn-success ml-3" 
                             onclick="fazerTarefa(${txt.id},this)">
                             Desfazer
                             </button>`
            l2.innerHTML += `<button type="button" 
                             class="btn btn-danger ml-3" 
                             onclick="removerTarefa(${txt.id})">
                             Remover
                             </button>`;
        }

        listatarefa.appendChild(li);
        Botoes.appendChild(l2)
    });
const totaltempo = listaTarefas.reduce((acumulador, soma) => {
    return acumulador + Number(soma.tempo)
}, 0)

let tempoTotal = document.getElementById("tempoTotal")
tempoTotal.innerHTML = totaltempo
console.log(totaltempo)


}


function limparCampos() {
    document.getElementById("tarefa").value = " "
    document.getElementById("tempo").value = " "
}



renderizarTarefas();

const btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", function () {
    const tarefa = document.getElementById("tarefa").value
    const tempo = document.getElementById("tempo").value

    addTarefa({
        id: listaTarefas.length + 1,
        tarefa: tarefa,
        tempo: tempo,
        feita: false,
    })
})