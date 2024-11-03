let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("taskinput");
let editBtn = document.getElementById("edit-btn")
let deleteBtn = document.getElementById("delete-btn")

// Ajouter une tâche
function addTask() {
    
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let p = document.createElement("p");
    let taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    
    
    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerHTML = '<ion-icon class="edit" name="brush-outline"></ion-icon>'; // Ajout de l'icône "Modifier"
    editBtn.onclick = function() { editTask(taskContent); };
    
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<ion-icon class="supp" name="trash-outline"></ion-icon>'; // Ajout de l'icône "Supprimer"
    deleteBtn.onclick = function() { deleteTask(p); };
    
    p.appendChild(taskContent);
    p.appendChild(editBtn);
    p.appendChild(deleteBtn);
    
    taskList.appendChild(p);
    taskInput.value = "";
    event.preventDefault();
}


function editTask(taskContent) {
    let newTaskText = prompt("Modifier la tâche:", taskContent.textContent);
    if (newTaskText) {
        taskContent.textContent = newTaskText;
    }
}

function deleteTask(taskElement) {
    taskList.removeChild(taskElement);
}


