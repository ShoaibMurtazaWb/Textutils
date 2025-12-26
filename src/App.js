import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



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
      <TextForm heading="Enter text bellow to capitalize" mode= {mode}/>
      <About mode={mode} text={text}/>
    </>
  );
}

export default App;

