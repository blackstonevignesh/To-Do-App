import { useState, useEffect } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === '') return;
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput('');
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>{editIndex !== null ? 'Update' : 'Add'}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span onClick={() => editTodo(index)}>&#9998;</span> 
            <span onClick={() => deleteTodo(index)}>&#10060;</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .todo-container {
          max-width: 400px;
          margin: 50px auto;
          text-align: center;
        }
        input {
          padding: 10px;
          width: 80%;
          margin-right: 10px;
        }
        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          padding: 10px;
          margin: 10px 0;
          background-color: #f3f3f3;
          display: flex;
          justify-content: space-between;
        }
        span {
          cursor: pointer;
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default Todo;
