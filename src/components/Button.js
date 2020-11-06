import React from "react";

const Button = ({ tasks, setTasks, newTask, setNewTask }) => {
  const handleClick = () => {
    // si le state de l'input contient quelque chose
    if (newTask) {
      const newTasks = [...tasks]; // copie du tableau state des tâches dans une nouvelle variable
      newTasks.push({ task: newTask, isDone: false, id: tasks.length }); // ajout de la nouvelle tâche
      setTasks(newTasks); // mise à jour du state des tâches avec cette nouvelle tâche

      setNewTask(""); // state de l'input remit à 0 pour supprimer les caractères apparants dans l'input

      // si le state de l'input ne contient rien
    } else {
      alert("Please enter a task");
    }
  };
  return <button onClick={handleClick}>Add task</button>;
};

export default Button;
