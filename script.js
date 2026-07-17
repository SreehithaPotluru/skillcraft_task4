function addTask() {
  const taskInput = document.getElementById('task');
  const dateInput = document.getElementById('taskDate');
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText} ${taskDate ? ' - ' + new Date(taskDate).toLocaleString() : ''}</span>
    <div class="actions">
      <button onclick="toggleComplete(this)">✔</button>
      <button class="edit" onclick="editTask(this)">✎</button>
      <button class="delete" onclick="deleteTask(this)">🗑</button>
    </div>
  `;
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
  dateInput.value = '';
}

function toggleComplete(button) {
  const task = button.parentElement.previousElementSibling;
  task.classList.toggle('completed');
}

function editTask(button) {
  const task = button.parentElement.previousElementSibling;
  const newTask = prompt('Edit task:', task.textContent);
  if (newTask !== null && newTask.trim() !== '') {
    task.textContent = newTask;
  }
}

function deleteTask(button) {
  const li = button.closest('li');
  li.remove();
}
