function addTask() {
  const taskText = document.getElementById('taskText').value.trim();
  const taskDateTime = document.getElementById('taskDateTime').value;

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
    <strong>${taskText}</strong><br>
    <small>${taskDateTime ? new Date(taskDateTime).toLocaleString() : ''}</small>
    <div class="task-controls">
      <button class="complete" onclick="toggleComplete(this)">✅ Done</button>
      <button class="edit" onclick="editTask(this)">✏️ Edit</button>
      <button class="delete" onclick="deleteTask(this)">🗑️ Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  // Reset inputs
  document.getElementById('taskText').value = '';
  document.getElementById('taskDateTime').value = '';
}

function toggleComplete(button) {
  const li = button.closest('li');
  li.classList.toggle('completed');
}

function editTask(button) {
  const li = button.closest('li');
  const currentText = li.querySelector('strong').innerText;
  const newText = prompt("Edit your task:", currentText);
  if (newText !== null && newText.trim()) {
    li.querySelector('strong').innerText = newText.trim();
  }
}

function deleteTask(button) {
  const li = button.closest('li');
  li.remove();
}


