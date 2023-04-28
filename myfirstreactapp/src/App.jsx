import {BrowserRouter as Router, NavLink, Routes, Route} from "react-router-dom" 

import  {HomePage}  from "./pages";
import {HeroCard} from "./pages";
 
function App(props) {
    const mystyle = {
        color: "black",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
        
      };
      const pageStyle={
        
      };
    return (
        
    <Router>
        <nav>
            <ul id="nav" style={mystyle}>
                <button id="page">
                <NavLink to="/">Home</NavLink>
                </button>
                <button id="page2">
                    <NavLink to="heros">hero</NavLink>
                </button>
            </ul>
        </nav>
        
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/heros" element={<HeroCard/>}/>
    </Routes>
    </Router>
   
    );
}

export default App;
