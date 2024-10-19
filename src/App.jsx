import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  console.log(data);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      await axios.post("http://localhost:3000/form", {
        data,
      });
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        style={{ width: "100%" }}
        placeholder="name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        style={{ width: "100%" }}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        name="message"
        style={{ width: "100%" }}
        placeholder="message"
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={onSubmit}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Submit
      </button>
    </form>
  );
}

export default App;
