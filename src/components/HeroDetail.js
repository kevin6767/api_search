import React, {useState, useEffect} from "react";
import "../App.css";


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
        const hero = item.find(element => element.id === Number(heroId));
        console.log(hero);
        setItem(hero);

    };
    return(
        <div>
           <h1>{hero.localized_name} </h1>
            <h2>{hero.move_speed}</h2>
            <h2>{hero.base_health}</h2>
        </div>
    );
}

export default HeroDetail;