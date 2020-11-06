import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, index, tasks, setTasks }) => {
  const handleClick = () => {
    const newTasks = [...tasks]; // copie du tableau de state des tâches faites / non faites
    // si la tâche est finalement non faite, on entre dans le if, on change la valeur à false
    if (task.isDone) {
      newTasks[index].isDone = false; // on change la valeur à false pour la débarrer
      const poppedTask = newTasks.splice(index, 1).pop(); // on supprime l'objet du tableau
      newTasks.splice(task.id, 0, poppedTask); // on le réinjecte à sa position initial grâce à son id
      setTasks(newTasks);

      // si la tâche est faite, on entre dans le else
    } else {
      newTasks[index].isDone = true; // on change la valeur à true pour la barrer
      const poppedTask = newTasks.splice(index, 1).pop(); // on supprime l'objet du tableau
      newTasks.push(poppedTask); // et le réinjecte en dernière position

      setTasks(newTasks);
    }
  };

  const handleDelete = () => {
    // lorsqu'on clique sur la poubelle pour supprimer une tâche, on copie le state et supprimer l'élément en fonction de l'index puis renvoi le state
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    // ici je ré-attribue des ids pour chaque tâche pour quelle récupère leur id de position dans le tableau
    newTasks.map((task, item) => {
      task.id = item;
      task.isDone = false;
    });
    setTasks(newTasks);
  };
  return (
    // ternaire dans la className pour barré ou non la tâche en fonction de si le state est à true ou false
    <div className={task.isDone ? "closed" : "container-task"}>
      <input
        type="checkbox"
        checked={task.isDone ? true : false} // j'ai mis un checkbox car si j'ai disons 5 tâches et que je check la 1ère, celle-ci vient en dernière, si je la supprime à ce moment là, mon check se fait sur une autre tâche, du coup cela permet d'éviter ça mais mon state n'est pas content
        name={task.task}
        className="task"
        onClick={handleClick}
      />
      <label htmlFor={task.task} className="task">
        {task.task}
      </label>
      {/* icône pour supprimer une tâche */}
      <FontAwesomeIcon icon="trash" className="trash" onClick={handleDelete} />
    </div>
  );
};

export default Task;
