import React, {useState, useEffect} from "react"
import "../App.css"
import {Link} from "react-router-dom"
import {fetchHeroes} from './services/Selection.services'

function Selection() {
    const navStyle = {
        color: 'black'
    };
    const [items, setItems] = useState([])

    useEffect(async () => {
        setItems(await fetchHeroes())
    },[])


    return(
        <div>
            {items.map(item => (

                <h1 key={item.id}>
                    <Link style={navStyle} to={`/select/${item.id}`}>{item.localized_name} </Link>
                </h1>
            ))}
        </div>
    );
}

export default Selection