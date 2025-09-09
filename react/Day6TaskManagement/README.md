# Task Management Application

This project is a simple **Task Management Application** built using **React**.  
It demonstrates task creation, deletion, completion tracking, and state management using **React Hooks** and the **Context API**.

---

##  How to Run the Application Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Vasimbasha630/Day6TaskManagement.git
Navigate into the Project Folder

bash
Copy
Edit
cd Day6TaskManagement
Install Dependencies

bash
Copy
Edit
npm install
Run the Application

bash
Copy
Edit
npm start
The application will be available at http://localhost:3000

 Application Architecture
The project follows a component-based architecture:

App.js → Root component, wraps everything with Context Provider.

components/

TaskForm.js → Handles adding new tasks.

TaskList.js → Displays all tasks.

TaskItem.js → Represents individual tasks with remove/complete options.

context/

TaskContext.js → Defines state and actions for managing tasks using Context API.

styles/ → Contains CSS styling.

This separation ensures scalability, readability, and maintainability.

React Hooks and Context API Implementation
React Hooks Used

useState → To manage local state like input values and task completion.

useContext → To consume task state and actions provided by Context API.

useReducer (if used in your repo) → To manage complex state transitions (e.g., adding/removing tasks).

Context API

A TaskContext is created to provide global state.

The TaskProvider wraps the root component and exposes:

tasks → List of tasks.

addTask, removeTask, toggleTask → Functions to manipulate tasks.

This avoids prop drilling and ensures that all components can easily access task data and actions.

 Features
Add new tasks

Mark tasks as completed

Remove tasks

View task statistics (e.g., total tasks, completed tasks)
