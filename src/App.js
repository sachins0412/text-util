import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#424242";
      showAlert("success", "Dark Mode enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Dark Mode disabled");
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NavBar
        title="Text Utils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Form title="Enter your text" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
