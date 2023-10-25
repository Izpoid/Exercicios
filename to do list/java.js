function adicionarTarefa() {
    var inputElement = document.getElementById("nova-tarefa");
    var novaTarefa = inputElement.value;
    if (novaTarefa) {
        var listaElement = document.getElementById("lista-tarefas");
        var novoItem = document.createElement("li");
        novoItem.textContent = novaTarefa;
        listaElement.appendChild(novoItem);
        inputElement.value = "";
    }
}