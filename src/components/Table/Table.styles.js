import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const StyledTh = styled.th`
  background-color: #555879;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  color: white;
  text-align: center;
`;

export const StyledTd = styled.td`
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: #98A1BC;
    cursor: pointer;
  }
`;
