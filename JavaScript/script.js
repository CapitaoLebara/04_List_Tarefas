//FUNÇÃO ADICIONAR EVENTO
function addTask(){
    //Titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value
    
    if(taskTitle){
        //Clonar Template
        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true)

        //ADICIONAR TITULO
        newTask.querySelector(".task").textContent = taskTitle
        //REMOVER AS CLASSES DESNECESSARIAS
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //ADICIONAR TAREFA
        const list = document.querySelector(".list-task")

        list.appendChild(newTask)

        //ADICIONAR EVENTO REMOVER
        const removeBtn = newTask.querySelector(".close-btn").addEventListener("click", function(){
            removeTask(this)
        })

        //ADICIONAR EVENTO DE CHECK
        const doneBtn = newTask.querySelector(".check-btn").addEventListener("click", function(){
            completeTask(this)
        })

        //LIMPAR TEXTO
        document.querySelector("#task-title").value = ""
    }
}

//FUNCAO REMOVER TAREFAS
function removeTask(task){
    task.parentNode.remove(task)
}
//FUNÇÃO COMPLETAR TAREFA
function completeTask(task){
    const taskComplete = task.parentNode
    taskComplete.classList.toggle("done")

}
//EVENNTO DE ADICIONAR TAREFAS
const addBtn = document.querySelector("#btn")
addBtn.addEventListener("click", function(e){
    e.preventDefault()
    console.log("testando")

    addTask()
})


