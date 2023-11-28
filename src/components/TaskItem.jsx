import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BiTask, BiTaskX } from "react-icons/bi";

const TaskItem = ({ task, handleCompleteTask, handleDeleteTask }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const confirmDeletion = () => {
    const isConfirmed = window.confirm(
      "¿Seguro que deseás eliminar esta tarea?"
    );
    setConfirmDelete(isConfirmed); // Pedir confimación al usuario para setear el estado confirmDelete.
  };

  const handleComplete = () => {
    setCompleted(!completed);
    handleCompleteTask(task.id); // Llamar a la función de App.jsx para actualizar el estado.
  };

  useEffect(() => {
    if (confirmDelete) {
      handleDeleteTask(task.id); // Llamar a la función de App.jsx para eliminar la tarea solo si se ha confirmado por el usuario.
    }
  }, [confirmDelete, handleDeleteTask, task.id]);

  return (
    <div style={{ textDecoration: completed ? "line-through" : "none" }}>
      <li>{task.name}</li>
      <button
        className="btn"
        title="Marcar como completada"
        onClick={handleComplete}>
        <BiTask />
      </button>
      <button className="btn" title="Eliminar tarea" onClick={confirmDeletion}>
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
