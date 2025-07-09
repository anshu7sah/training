import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import debounce from "lodash.debounce"; // or your custom debounce utility

function App() {
  const debouncedSearch = debounce((query) => {
    // Perform your search or API call here
    console.log("Debounced search for:", query);
  }, 500);

  const handleChange = useCallback(
    (event) => {
      debouncedSearch(event.target.value);
    },
    [debouncedSearch]
  ); // Include debouncedSearch in dependency array if it could change

  return <input type="text" onChange={handleChange} />;
}

export default App;
