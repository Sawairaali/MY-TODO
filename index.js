
const todoForm = document.getElementById("form");//handling task in form by their id
const todoInput = document.getElementById("input");//handling input when new task added
const todoList = document.getElementById("list");//like a container handle tasks  

// Event listener for adding a task when the form is submitted (Enter or Add button click)
todoForm.addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the default form submission (page reload)

    const taskText = todoInput.value.trim();

    if (taskText) {
        addTask(taskText);  // Add the task to the list
        todoInput.value = "";  // Clear the input field
    } else {
        alert("Please enter a task.");
    }
});

// Function to add a task
function addTask(taskText) {
    const li = document.createElement("li");  // Create a new list item for the task

    // Creating the HTML structure for the task
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Event listener to mark task as complete (strike-through effect)
    const completeBtn = li.querySelector(".complete-btn");
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");  // Toggle the 'completed' class
    });

    // Event listener to delete the task
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(li);  // Remove the task from the list
    });

    // Append the new task to the list
    todoList.appendChild(li);
}



