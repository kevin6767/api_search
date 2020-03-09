import React, {useState, useEffect} from "react"
import "../App.css"
import {fetchHeroDetail} from './services/HeroDetail.services'
import { useParams } from 'react-router-dom'


const setHeroDetail = async setHero => {
    const hero = await fetchHeroDetail()
    setHero(hero)
}

function HeroDetail() {
    let id = useParams()
    const [hero, setHero] = useState({})

    useEffect(  () => {
            setHeroDetail(setHero, id)
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