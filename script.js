
document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addTodoButton = document.getElementById('addTodoButton');
    const todoList = document.getElementById('todoList');

    addTodoButton.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            todoInput.value = '';
            todoInput.focus();
        }
    });

    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodoButton.click();
        }
    });
});