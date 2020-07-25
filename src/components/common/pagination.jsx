import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
        if (pagesCount === 1) return null;
    // [1 ... pagesCount].map()
    const pages = _.range(1, pagesCount + 1);  // Returns an array

    return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    { pages.map(page => (
                    <li key={page} 
                        className={ page === currentPage ? "page-item active" : "page-item"}>
                        <button 
                            className="page-link" 
                            onClick={() => onPageChange(page)}>{page}
                        </button>
                    </li>
                    ))}
                </ul>
            </nav>        
     );
};
 
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    curentPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;