import { useState, useEffect } from "react";

export default function App() {
  let [heroObj, setHeroObj] = useState([]);
  const [heros, setHeros] = useState([]);
  const [name, setName] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    getHero();
  }, []);
  const getHero= function() {
    // const[item, setItem]=useState({});
    // const {id }=useParams();

    try {
        fetch(
        `https://akabab.github.io/superhero-api/api/all.json`
      ).then((response)=>{
        return response.json();
      }).then((result)=>{ 
        //console.log(result)
        setHeroObj(result);
      })
      
      
     
      // for(let hero of heroObj){
      //   let id=heroObj[hero.id]
      //   console.log(id)
      // }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(heroObj)
  function handleSubmit(e) {
    e.preventDefault();
    setHeros([...heros, inputText]);
  }
  const heroInfo = heros.map((hero) => {
    console.log(heroObj)
    const foundHero = heroObj.find((heroObj) => {
      return heroObj.name == hero;
    });
    //check if hero not found
    if(foundHero!=)
    return{
      typedName:hero,
      gender:foundHero.appearance.gender
      
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" value={inputText}onChange={(e)=>{
          setInputText(e.target.value)
        }} />
        <button type="submit">Submit</button>
      </form>
      {heroInfo.map((hero) => {
        return (<ul><li>{hero.typedName}</li>
            <li>{hero.gender}</li></ul>);
      })}
    </div>
  );
}
