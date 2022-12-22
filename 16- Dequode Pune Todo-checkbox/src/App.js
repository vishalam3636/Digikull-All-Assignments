import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // setting todos
        setTodos(res.data);

        // counting default checked
        setTotal(res.data.filter((todo) => todo.completed === true).length);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    // handling checked/unchecked count
    if (e.target.checked) {
      setTotal(total + 1);
    } else {
      setTotal(total - 1);
    }

    // updating checkbox (mark and un-mark)
    const copyTodos = [...todos];

    const selectedTodo = copyTodos.find(
      (todo) => todo.id * 1 == e.target.id * 1 + 1
    );

    const updateSelectedTodo = {
      ...selectedTodo,
      completed: e.target.checked ? true : false,
    };
    copyTodos[e.target.id] = updateSelectedTodo;

    setTodos(copyTodos);
  };

  // console.log(todos, "toodoosss....");
  // console.log(total, "countTotal....");
  return (
    <div className="App">
      <h2>Todos</h2>
      <h4>
        Total Todos: <span className="total">{total}</span>
      </h4>
      <div className="todosContainer">
        <ul>
          {todos.map((todo, key) => {
            return (
              <li key={key}>
                <span className="num">{key + 1})</span>
                <span className="check">
                  <input
                    checked={todo.completed ? "checked" : ""}
                    type="checkbox"
                    id={key}
                    onChange={handleChange}
                  />
                </span>
                <span className="title">{todo.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
