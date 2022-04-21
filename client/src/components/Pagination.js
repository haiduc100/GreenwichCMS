import React from 'react';

const Pagination = ({ perPage, total, paginate }) => {
    const perPageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        perPageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            <ul className="pagination-list">
                {perPageNumbers.map(perPageNumber => (
                    <li key={perPageNumber} className="pagination-item">
                        <button onClick={() => paginate(perPageNumber)}>
                            {perPageNumber}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;