import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const validatingData = (vname, vemail, vpassword) => {
    if (vname.length < 2 || vemail.length < 2 || vpassword.length < 2) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    validatingData(e.target.value, email, password);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    validatingData(name, e.target.value, password);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    validatingData(name, email, e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={nameChangeHandler} />
        </div>
        <div className="name">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={emailChangeHandler} />
        </div>
        <div className="name">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
          />
        </div>
        <button disabled={disabled}>Submit</button>
        <p className="error">{error}</p>
      </form>
    </>
  );
}

export default App;
