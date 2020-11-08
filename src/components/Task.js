import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, index, tasks, setTasks }) => {
  const handleClick = () => {
    const newTasks = [...tasks]; // copie du tableau de state des tâches faites / non faites
    // si la tâche est décochée, on entre dans le if, on change la valeur à false
    if (task.isDone) {
      newTasks[index].isDone = false; // on change la valeur à false pour la décocher
      const poppedTask = newTasks.splice(index, 1).pop(); // on supprime la tâche du tableau
      newTasks.splice(task.position, 0, poppedTask); // on la réinjecte à sa position initial grâce à son position initiale
      setTasks(newTasks);

      // si la tâche est cochée, on entre dans le else
    } else {
      console.log(newTasks[index]);
      newTasks[index].isDone = true; // on change la valeur à true pour la cocher
      const poppedTask = newTasks.splice(index, 1).pop(); // on supprime la tâche du tableau
      newTasks.push(poppedTask); // et la réinjecte en dernière position

      setTasks(newTasks);
    }
    axios
      .get(`http://localhost:3000/task/update?id=${task._id}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleDelete = () => {
    axios.get(`http://localhost:3000/task/delete/${task._id}`).then((res) => {
      setTasks(res.data);
    });
  };
  return (
    // ternaire dans la className pour barré ou non la tâche en fonction de si le state est à true ou false
    <div className={task.isDone ? "closed" : "container-task"}>
      <input
        type="checkbox"
        checked={task.isDone ? true : false} // j'ai mis un checkbox car si j'ai disons 5 tâches et que je check la 1ère, celle-ci vient en dernière, si je la supprime à ce moment là, mon check se fait sur une autre tâche, du coup cela permet d'éviter ça mais mon state n'est pas content
        name={task.name}
        className="task"
        onClick={handleClick}
      />
      <label htmlFor={task.name} className="task">
        {task.name}
      </label>
      {/* icône pour supprimer une tâche */}
      <FontAwesomeIcon icon="trash" className="trash" onClick={handleDelete} />
    </div>
  );
};

export default Task;
