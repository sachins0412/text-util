import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar title="Text Utils" about="About Us" />
      {/* <Form title="Enter your text" /> */}
      <About />
    </>
  );
}

export default App;
