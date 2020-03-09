import React from 'react'

export const fetchHeroDetail = async ({match}) => {
    const data = await fetch(`https://api.opendota.com/api/heroStats`)
    const item = await data.json()

    const heroId = match.params.id
    console.log(match.params.id)
    const hero = item.find(element => element.id === Number(heroId))
    console.log(hero)
    return await hero

};