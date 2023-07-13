document.addEventListener("DOMContentLoaded", () => {
 
});

// Selecting the task lister form + creating the submit button.
const createTaskForm = document.getElementById("create-task-form");
createTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  //Selecting the actual input box from the form and assigning the value from the input.
  const newTaskInput = document.getElementById("new-task-description");
  const newTask = newTaskInput.value;
  
  //Converting the text input into a node so we can append it to the table.
  const listItem = document.createElement("li");
  listItem.textContent = newTask;
  
  //Selecting the list and passing the value through.
  const list = document.getElementById('list');
  list.appendChild(listItem);
  
  //Testing to assure the output was what we entered into the textbox.
  console.log(newTask);
  
  // Clear the input field after adding the task
  newTaskInput.value = "";
});
