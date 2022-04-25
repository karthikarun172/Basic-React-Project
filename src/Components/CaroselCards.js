import React from 'react'

function CaroselCards({ name, cusinie, rating }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "10px", height: "100px", width: "300px", backgroundColor: "#F9FFA4", borderRadius: "20px", boxShadow: `5px 5px 5px grey`, boder: "none" }} >
            <div>
                <h3>{name}</h3>
                <p>{cusinie}</p>
            </div>
            <div>
                <h5>{rating}</h5>
            </div>
        </div>

    )
}

export default CaroselCards