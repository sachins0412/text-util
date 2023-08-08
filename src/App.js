import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#424242";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <NavBar
        title="Text Utils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Form title="Enter your text" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
