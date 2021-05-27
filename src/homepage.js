import React from "react";
import "./homepage.css"
import react from "./react.png"

export default function Homepage(){


    return(
        <div className="homepage">

        <h2>Hello and welcome to my page 😊</h2>

        <h4>
            I want to apply for the apprenticeship as IT-developer at Your company, so
         I made this page exclusivly for You to show You what I can do.
        </h4>  <br /> <hr />

        <h5>Without further ado...</h5>

        <p>While I was writing the application I strugelld to convince You of the things I can do. And after hours of thinking it hit me: "Why don't I <span className="big">leiterally</span> show then what I can do?!"</p>
        <br />
        <p>
            I started the <a href="https://shecodes.io" target="_blank" >SheCodes</a> workshops in 2020 and started my coding journey. 
            Since I'm self thought the knowlage comes from various sources. Till now I had some experiance with Java Script but I plan on so much more.  
            
             <br /><br />
        </p>

        <h6>This project was made in <span className="big">Visual Studio Code</span> with <span className="big">React</span></h6>

        <br /> <br />

        <img className="react" src={react} alt="a laptop with code" />


        <p>The code in open to everyone on <a href="">my Github profile</a></p>
        </div>
    )
}