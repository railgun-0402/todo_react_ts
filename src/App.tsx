import { useState, useRef, MouseEvent } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid'
import TodoList from "./TodoList";

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const taskRef = useRef();

  type Todo = {
    task: string;
    id: string;
    completed: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);

  }

    /*
    * タスクを追加する
    */
    const handleAddTask = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {      
      const newTodos: Todo = {
        task: text,
        id: uuidv4(),
        completed: false,
      }

      setTodos((prevTask) => {
        return [...prevTask, newTodos];
      });
    }

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>        
        <input
        type='text'        
        onChange={(event) => setText(event.target.value)}
        value={text}
        />
        <button onClick={(e) => handleAddTask(e)}>タスク追加</button>
        <button>タスクを削除</button>        
        <div>
        {todos.map(todo => (
          <div key={todo.id}>
            {todo.task}
          </div>        
        ))}
        </div>        
      </div>
    </div>
  );
}

export default App;
