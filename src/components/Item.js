import React from "react";

const Item = ({   
    id, 
    name, 
    description,
    entryDate
}) => {
    return (
        <div>
            <h1 className="name">{name}</h1>
            <div className="description">{description}</div>
            <div className="entry-date">{entryDate}</div>
            <button>Add to cart</button>
        </div>
    )
}