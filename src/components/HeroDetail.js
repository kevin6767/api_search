import React, {useState, useEffect} from "react"
import "../App.css"
import {fetchHeroDetail} from './services/HeroDetail.services'

function HeroDetail({match}) {

    const [hero, setHero] = useState({})

    useEffect( async () => {
         setHero( await fetchHeroDetail(match.params.id))
    },[])




    return(
        <div>
           <h1>{hero.localized_name} </h1>
            <h2>{hero.move_speed}</h2>
            <h2>{hero.base_health}</h2>
        </div>
    )
}

export default HeroDetail