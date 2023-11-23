import { useState } from "react";
import PropTypes from "prop-types";
import { BiTask, BiTaskX } from "react-icons/bi";

const TaskItem = ({ task, handleCompleteTask, handleDeleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    handleCompleteTask(task.id); // Llama a la función de App.jsx para actualizar el estado
  };

  const handleDelete = () => {
    handleDeleteTask(task.id); // Llama a la función de App.jsx para eliminar la tarea
  };

  return (
    <div style={{ textDecoration: completed ? "line-through" : "none" }}>
      <li>{task.name}</li>
      <button
        className="btn"
        title="Marcar como completada"
        onClick={handleComplete}>
        <BiTask />
      </button>
      <button className="btn" title="Eliminar tarea" onClick={handleDelete}>
        <BiTaskX />
      </button>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
