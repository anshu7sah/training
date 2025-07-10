import "./App.css";

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contacts from "./pages/Contacts";
import SingleProduct from "./pages/SingleProduct";
import Counter from "./pages/Counter";
import Theme from "./pages/Theme";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contacts" element={<Contacts />} />

      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/theme" element={<Theme />} />
    </Routes>
  );
}

export default App;
