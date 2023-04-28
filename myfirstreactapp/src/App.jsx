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
        <body style={pageStyle}>
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
    </body>
    );
}

export default App;

// import { useState, useEffect } from "react";

// export default function App() {
//   let [heroObj, setHeroObj] = useState([]);
//   const [heros, setHeros] = useState([]);
//   const [name, setName] = useState([]);
//   const [inputText, setInputText] = useState("");
//   useEffect(() => {
//     getHero();
//   }, []);
//   const getHero= function() {
//     // const[item, setItem]=useState({});
//     // const {id }=useParams();

//     try {
//         fetch(
//         `https://akabab.github.io/superhero-api/api/all.json`
//       ).then((response)=>{
//         return response.json();
//       }).then((result)=>{ 
//         //console.log(result)
//         setHeroObj(result);
//       })
      
      
     
//       // for(let hero of heroObj){
//       //   let id=heroObj[hero.id]
//       //   console.log(id)
//       // }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   console.log(heroObj)
//   function handleSubmit(e) {
//     e.preventDefault();
//     setHeros([...heros, inputText]);
//   }
//   const heroInfo = heros.map((hero) => {
//     console.log(heroObj)
//     const foundHero = heroObj.find((heroObj) => {
//       return heroObj.name == hero;
//     });
//     //check if hero not found
   
//       return{
//       typedName:hero,
//       gender:foundHero.appearance.gender,
//       race:foundHero.appearance.race,
//       intelligence:foundHero.powerstats.intelligence,
//       strength:foundHero.powerstats.strength,
//       speed:foundHero.powerstats.speed,
//       durability:foundHero.powerstats.durability,
//       power:foundHero.powerstats.power,
//       image:foundHero.images.lg
//     }
    
    
//   });

//   return (
//     <div>
//       <form onSubmit={handleSubmit} action="">
//         <input type="text" value={inputText}onChange={(e)=>{
//           setInputText(e.target.value)
//         }} />
//         <button type="submit">Submit</button>
//       </form>
//       {heroInfo.map((hero) => {
//         return (
        
//         <ul>
//             <img src={hero.image} alt="hero Image"></img>
//             <li>{hero.typedName}</li>
//             <li>{hero.gender}</li>
//             <li>{hero.race}</li>
//             <li>Strength {hero.strength}</li>
//             <li>intelligence {hero.intelligence}</li>
//             <li>Speed {hero.speed}</li>
//             <li>durability {hero.durability}</li>
//             <li>Power {hero.power}</li>
//             </ul>);
            
//       })}
//     </div>
//   );
// }

