import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(1);
  const [u, setU] = useState(2);
  const [name, setName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("name", name);
    }, 500);

    return () => clearTimeout(timer);
  }, [name]);

  const clickHandler = () => {
    setData((p) => p + 1);
  };

  const uclickHandler = () => {
    setU((p) => p + 1);
  };

  return (
    <div>
      {data}
      <br /> {u}
      <br />
      <button onClick={clickHandler}>click</button>
      <br />
      <button onClick={uclickHandler}>Uclick</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

// function App() {
//   const debouncedSearch = debounce((query) => {
//     console.log("Debounced search for:", query);
//   }, 500);

//   const handleChange = (event) => {
//     debouncedSearch(event.target.value);
//   };

//   // Include debouncedSearch in dependency array if it could change

//   return <input type="text" onChange={handleChange} />;
// }
export default App;
