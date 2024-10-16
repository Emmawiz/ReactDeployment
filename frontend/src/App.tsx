// import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewCourses from "./components/NewCourses";
import ExistingCourses from "./components/ExistingCourses";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <NewCourses />
        <ExistingCourses />
      </div>
    </>
  );
}

export default App;
