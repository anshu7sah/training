import "./App.css";

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contacts from "./pages/Contacts";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contacts" element={<Contacts />} />

      <Route path="/singleproduct/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
