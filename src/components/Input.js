import React from "react";

const Input = ({ newTask, setNewTask }) => {
  const handleChange = (e) => {
    // mise à jour du state de l'input à chaque entrée sur le clavier
    setNewTask(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      value={newTask}
      placeholder="new task"
    />
  );
};

export default Input;
