import { useState } from "react";
import PropTypes from "prop-types";
import { BiAddToQueue } from "react-icons/bi";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() === "") return; // Evita que se puedan agregar tareas vacías.

    addTask({ id: new Date().getTime(), name: taskName, completed: false });
    setTaskName(""); // Limpia el campo "Nombre" después de agregar la tarea.
  };

  return (
    <div>
      <h2 className="subtitle">Agregá una Nueva Tarea</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input type="text" value={taskName} onChange={handleInputChange} />
        <button className="btn" title="Agregar tarea" type="submit">
          <BiAddToQueue />
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
