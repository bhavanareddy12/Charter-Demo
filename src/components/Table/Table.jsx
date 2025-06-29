import PropTypes from 'prop-types';

import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr
} from './Table.styles';

function Table({columns, data, handleClick}){
    function arrayToTable(data){
        return data.map((row, i) => (
                    <StyledTr key={i} onClick={()=>handleClick && handleClick(row)}>
                    <StyledTd>{i+1}</StyledTd>
                    {columns.map((col, j) => (
                        row[col.key] && <StyledTd key={j}>{row[col.key]}</StyledTd>
                    ))}
                    </StyledTr>
                ))
    }

    return(
        <StyledTable>
            <thead>
                <StyledTr>
                    <StyledTh>ID</StyledTh>
                    {columns.map((col, i) => (
                        <StyledTh key={i}>{col.label}</StyledTh>
                    ))}
                </StyledTr>
            </thead>
            <tbody>
                {Array.isArray(data) && arrayToTable(data)}
            </tbody>
        </StyledTable>
    )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func,
};

export default Table