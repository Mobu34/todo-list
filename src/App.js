import React, { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task";
import Input from "./components/Input";
import Button from "./components/Button";
import axios from "axios";

// import de font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash, faListAlt);

const App = () => {
  const [tasks, setTasks] = useState([]); // state pour gérer les tâches
  const [newTask, setNewTask] = useState(""); // state pour gérer l'input

  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  console.log(tasks);
  return (
    <>
      <header>
        <div className="wrapper">
          <FontAwesomeIcon icon="list-alt" className="icon-todo-list" />
          Todo List
        </div>
      </header>
      <div className="container">
        <div className="tasks">
          {/* boucle sur le tableau tasks pour faire apparaitre les tâches s'il y en a */}
          {tasks.map((task, index) => {
            return (
              <Task
                key={task._id}
                task={task}
                index={index}
                tasks={tasks}
                setTasks={setTasks}
              />
            );
          })}
        </div>
        <div className="new-entry">
          <Input newTask={newTask} setNewTask={setNewTask} />
          <Button
            tasks={tasks}
            setTasks={setTasks}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </div>
      </div>
      <footer>Made with React at Le Reacteur by Lucas</footer>
    </>
  );
};

export default App;
