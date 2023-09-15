import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState<string>("");
  const [todos, setTodos] = useState<string>("");

  const inputText = useRef(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTasks(e.target.value);

  }

  /*
  * タスクを追加する
  */
    const handleAddTask = () => {
      setTodos(tasks);
    }

  return (
    <>
      <TodoList tasks={todos} />
      <input       
      type='text'      
      ref={inputText}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <button onClick={handleAddTask}>タスク追加</button>
      <button>タスクを削除</button>
    </>
  );
}

export default App;
