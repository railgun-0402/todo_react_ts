import { useState, } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    task: string;
    id: string;
    completed: boolean;
  };

    /*
    * タスクを追加する
    */
    const handleAddTask = () => {
      // テキストの値が空の時は何もしない
      if (text === "") return;

      const newTodos: Todo = {
        task: text,
        id: uuidv4(),
        completed: false,
      }

      // 追加したらテキストの中身は削除する
      setText("");

      setTodos((prevTask) => {
        return [...prevTask, newTodos];
      });
    }

    /*
    * タスクを削除する
    */
    const handleDeleteTask = () => {
      // チェックがついてないタスクを残す
      const restTodos = todos.filter((todo) => {
        return !todo.completed;
      });

      setTodos(restTodos);
    }

    /*
    * タスクのチェック状態を反転させる
    */
    const toggleTodo = (id: string) => {
      const newTodo = [...todos];
      const todo: any = newTodo.find((todo) => todo.id === id);

      todo.completed = !todo.completed;
      setTodos(newTodo);
    };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>        
        <input
        type='text'        
        onChange={(event) => setText(event.target.value)}
        value={text}
        />
        <button onClick={handleAddTask}>タスク追加</button>
        <button onClick={handleDeleteTask}>タスクを削除</button>

        {/* Todoリスト */}
        <div className="todolist">
        {todos.map(todo => (
          <div key={todo.id}>
            <input type="checkbox" onClick={() => toggleTodo(todo.id)}/>
            {todo.task}            
          </div>
        ))}

        {/* Todo残り数 */}
        <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
        </div>        
      </div>
    </div>
  );
}

export default App;
