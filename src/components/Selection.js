import React, {useState, useEffect} from "react";
import "../App.css";
import {Link} from "react-router-dom";

function Selection() {
    const navStyle = {
        color: 'black'
    };
    useEffect(() => {
            fetchHeroes();
    },[]);

    const [items, setItems] = useState([]);

    const fetchHeroes = async () => {
        const data = await fetch('https://api.opendota.com/api/heroStats');
        const heroes = await data.json();
        console.log(heroes);
        setItems(heroes);
    };
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

export default Selection;