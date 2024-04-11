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
    setToDos((currentArray) => [toDo, ...currentArray]); // input을 통해 입력받은 toDo와 빈 array의 element가 더해짐
    setToDo(""); // input 초기화
  };
  console.log(toDos);
  // console.log(toDos.map((item, index) => (<li key={index}>{item}</li>)));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1> {/*javascript code 추가*/}
      <form onSubmit={onSubmit}> {/* Form */}
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
