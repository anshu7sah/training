import { useEffect, useRef } from "react";
import "./App.css";
import { useOnline } from "./hooks/use-online";

function App() {
  const onlineStatus = useOnline();

  return (
    <div>
      {onlineStatus ? "you are online" : "You are not online"}
      <input type="file" />
      <button>Select Image</button>
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
