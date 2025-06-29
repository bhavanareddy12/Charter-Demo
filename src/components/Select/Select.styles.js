import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  margin:0px 10px;

  &:focus {
    border-color: #98A1BC;
  }

  &:disabled {
    background-color: #f1f1f1;
    color: #999;
    cursor: not-allowed;
  }
`;

export const StyledOption = styled.option`
  padding: 8px;

  &:hover {
    background-color: #98a1bc; 
  }
`;