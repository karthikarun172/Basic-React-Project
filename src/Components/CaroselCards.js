import React from 'react'
import "../CSS_Files/CaroselCard.css"

function CaroselCards({ name, cusinie, rating }) {
    return (
        <div className='CarocelDivContainer'  >
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