import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected +1)}
      //количество страниц
      pageRangeDisplayed={8}
      //количество страниц
      pageCount={2}
      forcePage={currentPage -1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;