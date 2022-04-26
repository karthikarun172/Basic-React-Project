import React from 'react'

const Paginate = ({ postPerPage, totalPost, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }

    console.log(pageNumbers);
    return (
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Paginate