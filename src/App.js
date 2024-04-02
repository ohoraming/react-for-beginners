import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time"); // 매번 실행
  
  useEffect(() => {
    console.log("I run only once"); // 최초 한 번만 실행
  }, []);
  
  useEffect(() => {
    console.log("I run when 'keyword' changes"); // keyword의 변화가 있을 때만 실행
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes"); // counter의 변화가 있을 때만 실행
  }, [counter]);
  
  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes"); // keyword 또는 counter의 변화가 있을 때만 실행
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
