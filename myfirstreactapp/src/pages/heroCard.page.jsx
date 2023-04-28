import { useState, useEffect, createElement } from "react";
import "./heroStyle.css"; 
export default function HeroCard() {
  let [heroObj, setHeroObj] = useState([]);
  const [heros, setHeros] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    getHero();
  }, []);
  const getHero= function() {
    try {
        fetch(
        `https://akabab.github.io/superhero-api/api/all.json`
      ).then((response)=>{
        return response.json();
      }).then((result)=>{ 
        setHeroObj(result);
      })
    } catch (error) {
      console.log(error);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    
    setHeros([...heros, inputText]);
  }
  const heroInfo = heros.slice(-1).map((hero) => {
    const foundHero = heroObj.find((heroObj) => {

        return heroObj.name == hero;
    });
    if(!foundHero){
      return{
        typedName:"hero not found check spelling"
      }
    }
    
      return{
      typedName:hero,
      gender:foundHero.appearance.gender,
      race:foundHero.appearance.race,
      alignment:foundHero.biography.alignment,
      intelligence:foundHero.powerstats.intelligence,
      strength:foundHero.powerstats.strength,
      speed:foundHero.powerstats.speed,
      durability:foundHero.powerstats.durability,
      power:foundHero.powerstats.power,
      image:foundHero.images.lg
      }
  });
  return (
    <div >
      <h1 className="container">Type the name of a hero!</h1>
      <form onSubmit={handleSubmit} className="container" action="">
        <input type="text" value={inputText}onChange={(e)=>{
          setInputText(e.target.value)
        }} />
        <button class="waves-effect waves-teal btn-flat" type="submit">Submit</button>
      </form>
      {heroInfo.map((hero) => {
        return (
          <div>
        <ul className="card" >
          <h2>{hero.typedName}</h2>
            <img  src={hero.image}  alt="hero Image" ></img>
            <p>{hero.race} {hero.gender}</p>
            <p>alignment {hero.alignment}</p>
      <table className="cardBottom">
        <thead>
          <tr>
              <th>Strength</th>
              <th>intelligence</th>
              <th>Speed</th>
              <th>durability</th>
              <th>Power</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{hero.strength}</td>
            <td>{hero.intelligence}</td>
            <td>{hero.speed}</td>
            <td>{hero.durability}</td>
            <td>{hero.power}</td>
          </tr>
        </tbody>
      </table>
      </ul>   
      </div>);
      })}
    </div>    
  );
}

