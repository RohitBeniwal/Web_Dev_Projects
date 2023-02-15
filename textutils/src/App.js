
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// let name="Rohit";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');

  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }

  return (
    <>
    <Router>
    <Navbar title="Textutils" disabled="Textutils Disabled" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About mode={mode} />}>
            
          </Route>
          <Route path="/" element={<TestForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
