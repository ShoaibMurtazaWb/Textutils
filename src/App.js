import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";





function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("dark");
  const [alert, setAlert] = useState(null)

  function showAlert(message, type){
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> setAlert(null), 1500)
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#032830";
      document.body.style.color = "white";
      setText('light')
      showAlert('Dark Mode is Enabled', 'light')
    } else {
      setMode("light");
      setText('dark')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode is Enabled", "dark");

    }
  }


  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 
      <Routes>
        <Route
          path="/"
          element={
            <TextForm heading="Enter text below to capitalize" mode={mode} showAlert= {showAlert} />
          }
        />
        <Route path="/about" element={<About mode={mode} text={text} />} />
      </Routes>
    </>
  );
}

export default App;

