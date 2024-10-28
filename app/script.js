document.getElementById("adicionar").addEventListener("click", function() {
    const tarefaInput = document.getElementById("novaTarefa");
    const tarefaTexto = tarefaInput.value.trim();
    
    if (tarefaTexto) {
        const li = document.createElement("li");
        li.textContent = tarefaTexto;

        // Botão para marcar como concluída
        const btnConcluir = document.createElement("button");
        btnConcluir.textContent = "Concluir";
        btnConcluir.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Botão para remover a tarefa
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(btnConcluir);
        li.appendChild(btnRemover);
        document.getElementById("listaTarefas").appendChild(li);

        // Limpar o campo de entrada
        tarefaInput.value = '';
    } else {
        alert("Por favor, digite uma tarefa!");
    }
});
