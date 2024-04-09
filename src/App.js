import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 1. 여러 toDo를 받는 array
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") { // toDo가 비어있으면 return
      return;
    }
    setToDo(""); // input 초기화
    setToDos(currentArray => [toDo, ...currentArray]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}> {/* Form */}
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
