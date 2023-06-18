import styled from "styled-components";



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
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
`;

export {
  Container,
  TableList,
  Table,
  TableHeader,
  TableRow,
  TableCell
}