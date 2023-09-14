import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState(["Todo1", "Todo2", "Todo3"]);

  return (
    <>
      <TodoList tasks={tasks} />
    </>
  );
}

export default App;
