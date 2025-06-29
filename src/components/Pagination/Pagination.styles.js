import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  gap: 8px;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${({ active }) => (active ? '#555879' : '#f1f1f1')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    background: #e4e4e4;
    color: #999;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${({ active }) => (active ? '#555879' : '#ddd')};
  }
`;