import React from 'react'

export const fetchHeroDetail = async ({id}) => {
    const data = await fetch(`https://api.opendota.com/api/heroStats`)
    const item = await data.json()
    const heroId = id
    console.log(heroId)
    const hero = item.find(element => element.id === Number(heroId))
    console.log(hero)
    return await hero

};