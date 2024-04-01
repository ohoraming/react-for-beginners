import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  
  // 3. 함수가 작동할 때마다 인자로 event를 받음
  const onChange = (event) => setKeyword(event.target.value); // 4. event를 발생시킨 input에서 value를 받아 keyword state에 넣음

  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...")
  }, []);
  console.log("SEARCH FOR", keyword);
  return (
    <div>
      <input // 1. input 생성
        value={keyword} // 5. keyword를 가져와 input의 value로 사용
        onChange={onChange} // 2. eventListener연결
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
