/*eslint-disable*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../../redux/actions/request';
import '../../scss/components/_pagination.scss';

function Pagination({ cardsPerPage, totalCards }) {
  const dispatch = useDispatch()
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const page = useSelector((store) => store.reducerPagination.currentPage);

  function previusPage(page) {
    if (page > 1) dispatch(paginate(page - 1))
  }

  function nextPage(page, finalPage) {
    if (page < finalPage) dispatch(paginate(page + 1))
  }

  return (
    <div>
      <ul className="pagination">
      <button className="pageButton" onClick={() => previusPage(page)}>Previus</button>
        {
          pageNumbers.map((number) => (
            <li key={number} className={ page == number ? "page-item-select" : "page-item'"}>
              <a onClick={() => dispatch(paginate(number))} href="#!" className="page-link">{number}</a>
            </li>
          ))
        }
        <button className="pageButton" onClick={() => nextPage(page, Math.ceil(totalCards / cardsPerPage))}>Next</button>
      </ul>
    </div>
  );
}

export default Pagination;
