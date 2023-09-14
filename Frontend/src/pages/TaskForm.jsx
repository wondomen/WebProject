import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    onAdd(task);
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskForm;
