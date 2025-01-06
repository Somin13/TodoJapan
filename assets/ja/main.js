//------- Sélection des éléments HTML nécessaires pour manipuler la liste des tâches et l'input utilisateur

let taskList = document.getElementById("task-list"); // Récupère la liste des tâches (container où toutes les tâches seront affichées)
let taskInput = document.getElementById("taskinput"); // Récupère le champ de saisie (input) où l'utilisateur tape une nouvelle tâche
let editBtn = document.getElementById("edit-btn"); // Récupère le bouton d'édition global (s'il existe dans le HTML, mais il semble que ce soit plutôt un bouton par tâche)
let deleteBtn = document.getElementById("delete-btn") // Récupère le bouton de suppression global (idem, pourrait être utile pour des boutons de suppression générale)

// Fonction pour ajouter une tâche à la liste

function addTask() {
    
    let taskText = taskInput.value.trim(); // Récupère le texte saisi pa l'utilisateur et enlève les espaces avant et après le texte
    if (taskText === "") return; // Vérifie si l'utilisateur n'a pas saisi de texte (chaîne)
    // Si oui, quitte la fonction sans rien ajouter

    let p = document.createElement("p"); // Création de l'élement <p> qui contiendra l'ensemble de la tâche (texte + boutons)
    let taskContent = document.createElement("span"); // Création de l'élement <span> pour afficher uniquement le texte de la tâche
    taskContent.textContent = taskText; // Définit le contenu du <span> avec le texte saisi par l'utilisateur

    //------- Création du bouton de modification

    let editBtn = document.createElement("button"); //Créz un élément pour bouton pour l'édtion 
    editBtn.className = "edit-btn"; //Attribue la classe CSS "edit-btn" au botuon pour le styliser
    editBtn.innerHTML = '<ion-icon class="edit" name="brush-outline"></ion-icon>'; // Ajout de l'icône "pinceau" dans le bouton en utilisant ion-icon pour indiquer l'édition
    
    
    editBtn.onclick = function() { editTask(taskContent); }; // Définit la fonction à exécuter lorqu'on clique sur le bouton d'édition
    let deleteBtn = document.createElement("button");// Appelle la fonction editTask en passant le <span> contenant le texte de la tâche
    
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


