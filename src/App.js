import { useStore } from "./store";

function App() {
    const [state, dispatch] = useStore();

    return (
        <div>
            <input type="text" value={state.todoInput} />
        </div>
    );
}

export default App;
