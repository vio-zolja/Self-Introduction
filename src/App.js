import React, {useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./homepage";
import AboutMe from "./aboutMe";
import Career from "./career";
import Contact from "./contact"





function App() {

let password = prompt(`Enter the password`)

  let [homepage,setHomepage] = useState(false);
  let [aboutMe,setAboutMe] = useState(false);
  let [career,setCareer] = useState(false);
  let [contact,setContact] = useState(false)

  function button1(){
    console.log(`but 1`)
    setHomepage(true)
  }

  function button2(){
    console.log(`but 2`)
    setAboutMe(true)
  }

  function button3(){
    console.log(`but 3`)
    setCareer(true)
  }

  function button4(){
    console.log(`but 4`)
    setContact(true)
  }


if(homepage){
  return (
    <div className="App">
    <div className="container">

    <header>
    <div className="title">Vio Zolja</div> <hr />
    <div className="row">
      <div className="col">
        <button onClick={button1} className="headButton">Homepage</button>
      </div>

      <div className="col">
        <button onClick={button2} className="headButton">About me</button>
      </div>

      <div className="col">
        <button onClick={button3} className="headButton">Career</button>
      </div>

      <div className="col">
        <button onClick={button4} className="headButton">Contact</button>
      </div>
      
    </div>
    </header>

    <Homepage />

    <footer>
      <h2>Vio Zolja</h2>
    </footer>

    </div>
    </div>
  );
}if(aboutMe){
  return (
    <div className="App">
    <div className="container">

    <header>
    <div className="title">Vio Zolja</div> <hr />
    <div className="row">
      <div className="col">
        <button onClick={button1} className="headButton">Homepage</button>
      </div>

      <div className="col">
        <button onClick={button2} className="headButton">About me</button>
      </div>

      <div className="col">
        <button onClick={button3} className="headButton">Career</button>
      </div>

      <div className="col">
        <button onClick={button4} className="headButton">Contact</button>
      </div>
      
    </div>
    </header>

    <AboutMe />

    <footer>
      <h2>Vio Zolja</h2>
    </footer>

    </div>
    </div>
  );
}if(career){
  return (
    <div className="App">
    <div className="container">

    <header>
    <div className="title">Vio Zolja</div> <hr />
    <div className="row">
      <div className="col">
        <button onClick={button1} className="headButton">Homepage</button>
      </div>

      <div className="col">
        <button onClick={button2} className="headButton">About me</button>
      </div>

      <div className="col">
        <button onClick={button3} className="headButton">Career</button>
      </div>

      <div className="col">
        <button onClick={button4} className="headButton">Contact</button>
      </div>
      
    </div>
    </header>

    <Career />

    <footer>
      <h2>Vio Zolja</h2>
    </footer>

    </div>
    </div>
  );
}if(contact){
  return (
    <div className="App">
    <div className="container">

    <header>
    <div className="title">Vio Zolja</div> <hr />
    <div className="row">
      <div className="col">
        <button onClick={button1} className="headButton">Homepage</button>
      </div>

      <div className="col">
        <button onClick={button2} className="headButton">About me</button>
      </div>

      <div className="col">
        <button onClick={button3} className="headButton">Career</button>
      </div>

      <div className="col">
        <button onClick={button4} className="headButton">Contact</button>
      </div>
      
    </div>
    </header>

    <Contact />

    <footer>
      <h2>Vio Zolja</h2>
    </footer>

    </div>
    </div>
  );
}if(password === "123"){
  return (
    <div className="App">
    <div className="container">

    <header>
    <div className="title">Vio Zolja</div> <hr />
    <div className="row">
      <div className="col">
        <button onClick={button1} className="headButton">Homepage</button>
      </div>

      <div className="col">
        <button onClick={button2} className="headButton">About me</button>
      </div>

      <div className="col">
        <button onClick={button3} className="headButton">Career</button>
      </div>

      <div className="col">
        <button onClick={button4} className="headButton">Contact</button>
      </div>
      
    </div>
    </header>

    <Homepage />

    <footer>
      <h2>Vio Zolja</h2>
    </footer>

    </div>
    </div>
  );
}else{
  return(
    <h3>Sorry this page is private</h3>
  )
}
  
}

export default App;
