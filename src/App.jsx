import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  // Verifica la existencia de datos en Local Storage al inicializar el estado.
  const initialTasks = window.localStorage.getItem("tasks")
    ? JSON.parse(window.localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialTasks);
  const [categories, setCategories] = useState([]); //Inicializar el estado de la lista de categorías.

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    // Actualiza Local Storage cada vez que el estado de tasks cambie
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Lista de tareas actualizada en Local Storage:", tasks);
  }, [tasks]);

  useEffect(() => {
    // Definir las  categorías y agregarlas al estado de categorías.
    const newCategories = [
      { name: "Total de tareas", countFunction: () => tasks.length },
      {
        name: "Tareas pendientes",
        countFunction: () => tasks.filter((task) => !task.completed).length,
      },
      {
        name: "Tareas completadas",
        countFunction: () => tasks.filter((task) => task.completed).length,
      },
      // Se pueden agregar más categorías aquí...
    ];
    setCategories(newCategories);
  }, [tasks]);

  return (
    <>
      <h1 className="title">
        Gestioná <span className="span-color">Tus Tareas</span>
      </h1>
      <section className="container">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
        <section className="counters">
          {categories.map((category) => (
            <Counter
              key={category.name}
              category={category.name}
              countFunction={category.countFunction}
            />
          ))}
        </section>
      </section>
    </>
  );
}

export default App;
