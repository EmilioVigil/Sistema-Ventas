import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  
  &.cancel{
    background-color: #B22222;
    &:hover {
        background-color: #FF6347;
    }  
}

  &.sale{
    background-color: #228B22;
    &:hover {
        background-color: #3CB371;
    }  
}

  


`


export {
    ButtonContainer,
    Button
}