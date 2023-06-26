import styled, { keyframes } from 'styled-components';

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;


const Container = styled.div`
    padding: 1rem;

`


// TABLE
const TableList = styled.div`
    padding-top:2rem;
    `
const Table = styled.table`
    width: 100%;
      border-collapse: collapse;
  `;


const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
`;

const TableRow = styled.tr`
  width: auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ButtonX = styled.button`
  display: inline-block;
  margin-left : 10px;
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Estilos del botón X */
  background-color: #e74c3c;
  color: #fff;
  transition: background-color 0.3s ease;

  /* Estilos de animación en el hover */
  &:hover {
    animation: ${hoverAnimation} 0.5s ease-in-out infinite;
  }
`


export {
  Container,
  TableList,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  ButtonX
}