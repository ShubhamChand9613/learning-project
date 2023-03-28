import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-dark');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('text-bg-'+cls);
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enable", "success");
      document.title = "Demo Project-Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "Demo Project-light";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Demo Projects" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Textform mode={mode} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
