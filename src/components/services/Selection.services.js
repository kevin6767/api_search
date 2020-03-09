import React from 'react'

export const fetchHeroes = async () => {
    const data = await fetch('https://api.opendota.com/api/heroStats');
    return data.json()
}
