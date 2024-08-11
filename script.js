document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = '完成';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = '编辑';
    editButton.addEventListener('click', function() {
        const newTaskText = prompt('编辑任务', taskText);
        if (newTaskText !== null) {
            li.firstChild.textContent = newTaskText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '删除';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById('tasks').appendChild(li);
    document.getElementById('new-task').value = '';
});