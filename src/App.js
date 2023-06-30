import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Boot from './component/Boot';
import Nav from './component/Nav';
import ALert from './component/Alert';
import Today from './component/Today';
// import Alertt from './component/Alertt';
// import Alertt from './component/Alertt';
import Contact from './component/contact';
import About from './component/About';
import Footer from './component/Footer';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const[mode,setMode]=useState('light');

  let colorRight=()=>{
    if(mode==='light' || mode==="Danger" || mode==="Warning"){
   setMode('success');
   document.body.style.backgroundColor="green";
    }
  }
   const ToggleChange=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
    
   }

  const toggle=()=>{
    if(mode==="light" ||mode==="success" || mode==="Danger" || mode==="Warning"){
      setMode("Danger");
      document.body.style.backgroundColor="red";
  }
}
const Prett=()=>{
  if(mode==="light" ||mode==="success" || mode==="Danger")
  setMode("Warning");
  document.body.style.backgroundColor="yellow";
}
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
setTimeout(() => {
   setAlert(null)
}, 2000);
    
  }
  return (
    <>
      {/* <Form/> */}
      <Router>
      <Nav colorRight={colorRight} toggle={toggle} Prett={Prett} ToggleChange={ToggleChange}/> 
      <ALert alert={alert}/>
    <Today showAlert={showAlert} mode={mode}/> 
    <Contact/>
    <br/><br/>
    <About/>
        <Routes>
          <Route path='/Alert' element={ <ALert alert={alert}/>}/>
          <Route path='/Today' element={<Today showAlert={showAlert} mode={mode}/>}/>
          <Route path='/Contact' element={ <Contact/>}/>
          <Route path='/About' element={ <About/>}/>
        </Routes>
        <Footer/>
      </Router>

     </>
    // </div>
        // <div className="App">
      /* <Nav colorRight={colorRight} toggle={toggle} Prett={Prett}/> 
      /* <ALert alert={alert}/> */
  );
  }


export default App;



// DIFFERENCE BETWEEN ANGULAR AND REACT JS
// WHAT IS JSX
// REACT BASIC
