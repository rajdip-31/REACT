import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
import About from './components/DarkMode'
import Alert from './components/Alert';
// import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {

  const [mode,setMode] = useState({
      color : "black",
      backgroundColor : "aliceblue"
    });
  const [btnText, setBtnText] = useState("Light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        Type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
 



  const toggleMode = () => {
    if(mode.color === "blue"){
      setMode({
        color : "black",
        backgroundColor : "aliceblue"
      })
      document.body.style.backgroundColor = "aliceblue";
      document.body.style.color = "black";
      setBtnText("Light");
      showAlert("light mode is enabled", "primary");
      document.title = "My React App Light Mode";
    }
    else{
      setMode({
        color : "blue",
        backgroundColor : "black"
      })
      document.body.style.backgroundColor = "#2c0f4a";
      document.body.style.color = "blue";
      setBtnText("Dark");
      showAlert("dark mode is enabled", "success");
      document.title = "My React App Dark Mode";

    }
  }

  return (
    <>  
    {/* Router utilization */}
    {/* <BrowserRouter>
     <Routes>
      <Route path ='' element = {<Navbar title = "Code_wizZz" interest = "MY_INTEREST" mode = {mode} toggleMode = {toggleMode} btnText = {btnText}/>}/>
      <Route path ='/textform' element = {<TextForm heading = "Enter the Text to Analyze" showAlert = {showAlert} />}/>
      <Route path="/about" element = {<About/>}/>
     </Routes>
    </BrowserRouter> */}

       {/* Passing Props */}
       <Navbar title = "Code_wizZz" interest = "MY_INTEREST" mode = {mode} toggleMode = {toggleMode} btnText = {btnText}/> 
        <Alert alert = {alert}/>
        
        {/* For Default Props */}
        {/* <Navbar/> */}
        {/* creating a text analyzer website  */}
        <div className="container my-3">
        <TextForm heading = "Enter the Text to Analyze" showAlert = {showAlert} />   
       </div> 
    
        
        {/* Website 2  darkmode */}
         <About/>
    </>
  );
}

export default App;

