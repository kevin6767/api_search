import React, {useState, useEffect} from "react";
import "./App.css";


function HeroDetail({match}) {

    useEffect(() => {
        fetchHero();
        console.log(match)
    },[]);

    const [hero, setItem] = useState({});

    const fetchHero = async () => {
        const fetchHero = await fetch(`https://api.opendota.com/api/heroStats`);
        const item = await fetchHero.json();
        setItem(item);
        const heroId = match.params.id;
        console.log(match.params.id);
        const hero = item.find(element => element.id === heroId);
        console.log(hero);
        console.log(item);
    };
    return(
        <div>
           <h1>{hero.name} </h1>
        </div>
    );
}

export default HeroDetail;