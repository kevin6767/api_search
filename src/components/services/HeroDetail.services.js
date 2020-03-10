import React from 'react'

export const fetchHeroDetail = async (id) => {
    const data = await fetch(`https://api.opendota.com/api/heroStats`)
    console.log(data)
    const heroDetails = await data.json()
    console.log(heroDetails)
    return heroDetails.find(heroDetail => heroDetail.id === +id)
};
