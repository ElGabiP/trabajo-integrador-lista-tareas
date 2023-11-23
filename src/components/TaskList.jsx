import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleCompleteTask, handleDeleteTask }) => {
  return (
    <>
      <h2 className="subtitle">Lista de Tareas</h2>
      <ol className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ol>
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
