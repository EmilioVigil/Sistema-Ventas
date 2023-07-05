import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
`;

const SubtotalText = styled.h2`
  margin-right: 10px;
  color: #333;
`;

const SubtotalAmount = styled.p`
  color: black;
  background-color: #fff;
  padding: .5rem;
  width: 10rem;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;
export {
  Container,
  SubtotalAmount,
  SubtotalText
}