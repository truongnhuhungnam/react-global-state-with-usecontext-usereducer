import { useRef } from "react";
import { useStore, actions } from "./store";

function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(""));

        inputRef.current.focus();
    };

    return (
        <div>
            <input
                type="text"
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
                ref={inputRef}
            />

            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
