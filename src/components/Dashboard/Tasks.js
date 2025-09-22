// components/Dashboard/Tasks.js
import React, { useState } from 'react';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review project documentation', assignee: 'You', dueDate: '2023-06-01', status: 'todo' },
    { id: 2, title: 'Prepare meeting agenda', assignee: 'Sarah', dueDate: '2023-05-25', status: 'inprogress' },
    { id: 3, title: 'Finalize design mockups', assignee: 'Mike', dueDate: '2023-05-20', status: 'done' }
  ]);

  const [newTask, setNewTask] = useState({ title: '', assignee: '', dueDate: '', status: 'todo' });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ title: '', assignee: '', dueDate: '', status: 'todo' });
    }
  };

  const handleInputChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="tasks">
      <div className="section-header">
        <h2>Tasks</h2>
      </div>
      
      <div className="tasks-content">
        <form onSubmit={handleAddTask} className="add-task-form card">
          <h3>Add New Task</h3>
          <div className="form-row">
            <input
              type="text"
              name="title"
              placeholder="Task title"
              value={newTask.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="assignee"
              placeholder="Assignee"
              value={newTask.assignee}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleInputChange}
            />
            <select name="status" value={newTask.status} onChange={handleInputChange}>
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
        
        <div className="tasks-list">
          <div className="tasks-column">
            <h3>To Do</h3>
            {tasks.filter(task => task.status === 'todo').map(task => (
              <div key={task.id} className="task-card card">
                <h4>{task.title}</h4>
                <p>Assignee: {task.assignee}</p>
                <p>Due: {task.dueDate}</p>
              </div>
            ))}
          </div>
          
          <div className="tasks-column">
            <h3>In Progress</h3>
            {tasks.filter(task => task.status === 'inprogress').map(task => (
              <div key={task.id} className="task-card card">
                <h4>{task.title}</h4>
                <p>Assignee: {task.assignee}</p>
                <p>Due: {task.dueDate}</p>
              </div>
            ))}
          </div>
          
          <div className="tasks-column">
            <h3>Done</h3>
            {tasks.filter(task => task.status === 'done').map(task => (
              <div key={task.id} className="task-card card">
                <h4>{task.title}</h4>
                <p>Assignee: {task.assignee}</p>
                <p>Due: {task.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;