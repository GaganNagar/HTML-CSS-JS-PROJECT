# To-Do List App: "NextUp"

## 📁 Folder Path
`JS-Projects All/NextUp/`

***

## 📝 Project Overview
"NextUp" is a fully functional To-Do List application built entirely with vanilla JavaScript, demonstrating advanced DOM manipulation techniques. The entire user interface, from the input fields to the task list, is generated dynamically. The app allows users to add, complete, edit, and delete tasks, providing a seamless and interactive user experience.

***

## 🧠 Concepts Covered
This project heavily utilizes core web technologies and modern JavaScript concepts:
-   **HTML & CSS:** Basic structure and modern styling with Flexbox.
-   **JavaScript (ES6+):** Core logic and functionality.
-   **Dynamic UI Generation:** Creating and appending all HTML elements (`<h1>`, `<input>`, `<button>`, `<ul>`, `<li>`) using `document.createElement()` and `.appendChild()`.
-   **DOM Manipulation:** Modifying element properties, classes (`.classList`), and attributes (`.setAttribute()`).
-   **Event Handling:** Extensive use of `addEventListener` for clicks, key presses (`keyup`), double clicks (`dblclick`), and focus changes (`focusout`).
-   **Event Delegation:** Using a single event listener on the parent `<ul>` to efficiently manage events for all task items (delete, complete, edit).
-   **State Management:** Toggling classes (`.classList.toggle('completed')`) to manage the visual state of tasks.

***

## 🌳 Folder & File Structure
/JS-Projects All/NextUp/
│
├── NExtUP.html         # The main HTML file with the root div and styles.
├── NextUp.js           # The core JavaScript file that builds and runs the entire application.
└── Untitled-1.md       # A markdown file with the project's task breakdown.


***

## 💡 Code Snippets

Here are some key snippets from `NextUp.js` that showcase the project's logic.

### 1. Dynamic UI Creation
All HTML elements are created in JavaScript and appended to the DOM, making the `index.html` body completely empty initially.

```javascript

let appRoot = document.querySelector("#app-root");

let container=document.createElement("div");
container.classList.add("app-container");

let h1=document.createElement("h1");
h1.textContent="NextUp List";
h1.classList.add("main-heading");

// ... more element creation ...

inputContainer.appendChild(inputBox);
inputContainer.appendChild(addBtn);

container.appendChild(h1);
// ... appending all other elements ...

appRoot.appendChild(container);
2. Adding a New Task
This function creates a new list item (<li>) with a task, an edit input, and a delete button, then appends it to the list.



function addTask(){
    const taskText =inputBox.value.trim();
    if(taskText===""){
        alert("Please enter a task.");
        return;
    }
    let li=document.createElement("li");
    li.classList.add("task-item");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text")

    let editInput=document.createElement("input")
    editInput.type=("text");
    editInput.classList.add("edit-input","hidden");

    let deleteBtn =document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.textContent="Delete";

    li.appendChild(taskSpan);
    li.appendChild(editInput)
    li.appendChild(deleteBtn);
    ulList.appendChild(li);

    inputBox.value="";
   updateCounter();
}
3. Event Delegation for Delete and Complete
A single click listener on the <ul> element handles events for all its children, improving performance and simplifying code.



ulList.addEventListener("click",function(event){
    const clickedData=event.target;
    if(clickedData.classList.contains("delete-btn")){
        const parentLi=clickedData.parentElement
        parentLi.remove();
        updateCounter();
    }
    else if (clickedData.classList.contains("task-text")){
        const parentLi = clickedData.parentElement;
        parentLi.classList.toggle("completed");
        updateCounter();
    }
});
🏆 Key Learnings / Skills Demonstrated
Dynamic Application Building: Proved ability to build a complete web application interface from scratch using only JavaScript.

Efficient Event Handling: Implemented the event delegation pattern, which is crucial for performance in applications with many interactive elements.

In-Place Editing: Developed a user-friendly edit-on-double-click feature that swaps elements and handles state changes seamlessly.

Clean & Modular Code: Separated functionalities into distinct functions (addTask, saveEdit, updateCounter) for better readability and maintenance.

🚀 Future Improvements / Next Steps
Local Storage: Implement localStorage to save tasks so they persist even after the browser is refreshed.

Filtering Tasks: Add filter buttons ("All", "Active", "Completed") to allow users to view specific task categories.

Due Dates: Add an <input type="date"> field to allow users to set due dates for tasks.

Drag and Drop: Implement drag-and-drop functionality to allow users to reorder their tasks.