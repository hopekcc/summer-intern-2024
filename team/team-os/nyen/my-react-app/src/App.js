import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`${firstname} ${lastname} ${username} ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign-up form</h1>
      <h2>Welcome to HopeKCC!</h2>

      <label>First name:
      <br></br>
      <input 
        type="text" 
        name="firstname" required
        value={firstname} 
        onChange={(e) => setfirstname(e.target.value)}
      />
      </label>
      <br></br>

      <label>Last name:
      <br></br>
        <input 
          type="text" 
          name="lastname" required
          value={lastname} 
          onChange={(e) => setlastname(e.target.value)}
        />
        </label>
        <br></br>

        <label>Username:
        <br></br>
        <input 
          type="text" 
          name="username" required
          value={username} 
          onChange={(e) => setusername(e.target.value)}
        />
        </label>
        <br></br>

        <label>Password:
        <br></br>
        <input 
          type="password" 
          name="password" required
          value={password} 
          onChange={(e) => setpassword(e.target.value)}
        />
        </label>
        <br></br>

        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm;
