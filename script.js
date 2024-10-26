// Script for peforming CRUD operations on a task list

// Retreive the form, input and task list elements
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('.task_input');
const taskList = document.querySelector('.task-list');

// Add event listener to the form to handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = taskInput.value;
    if (task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <p>${task}</p>
             <button class="edit">Edit</button>
             <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

// Add event listener to the task list to handle task edit and deletion
taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('edit')) {
        const taskItem = e.target.parentElement;
        const p = taskItem.querySelector('p');
        const text = p.textContent;
        taskItem.innerHTML = `
            <input type="text" value="${text}" class="edit-input">
            <button class="save">Save</button>
        `;
    } else if (e.target.classList.contains('save')) {
        const taskItem = e.target.parentElement;
        const input = taskItem.querySelector('.edit-input');
        const newText = input.value;
        taskItem.innerHTML = `
            <p>${newText}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
    }
});