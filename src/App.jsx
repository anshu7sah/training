import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  return (
    <div>
      <input type="text" ref={ref} />
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
