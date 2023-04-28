import React, { useState } from "react";
import { Component } from "react";
import "./heroStyle.css"; 
export default function HomePage() {
const [text, setText] = useState("");
const [list, setList] = useState(["Welcome to a database that takes the info of so many heroes and creates a card of them"]);


    const mystyle = {
          color: "black",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial"
        };

return (
    
    <div>
    <h1 className="container">Welcome to the Hero Database</h1>
    <h2 className="container">Welcome to a database that takes the info of so many heroes and creates a card for them</h2>
    </div>
)

}

