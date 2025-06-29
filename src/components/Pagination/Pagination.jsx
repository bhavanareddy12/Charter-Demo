import PropTypes from 'prop-types';
import { PaginationWrapper, PageButton } from './Pagination.styles';

function Pagination({ currentPage, totalItems, pageSize, onPageChange }){
    const totalPages = Math.ceil(totalItems / pageSize);

    if (totalPages === 1) return null;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    }

    return(
    <PaginationWrapper>
      <PageButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </PageButton>
       {pageNumbers?.map((number) => (
        <PageButton
          key={number}
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </PageButton>
      ))}
      <PageButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </PageButton>
    </PaginationWrapper>
    )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination