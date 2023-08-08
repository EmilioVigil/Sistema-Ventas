import styled from "styled-components"

const SectionSearchProduct = styled.div`
    display: flex;
`
const InputSearchBar = styled.input`
  margin-left: 1rem;
  margin-right: .5rem;
  width: 50rem;
  border: 1px solid #ccc;
  padding: 5px;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  height: 1.5rem;
    &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }


`

const InputQuantity = styled.input`
  width: 200px;
  margin-left : 15px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  border-radius: 5px;
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

`
const SearchButton = styled.button`
  height: 2.3rem;
  width: 2.3rem;
  margin-right: 5px;
  padding: 5px;
  font-size: 16px;
  background-color: #1E90FF ;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const AddButton = styled.button`
    height: 2.3rem;
  width: 2.3rem;
  padding: 5px;
  font-size: 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export {
  SectionSearchProduct,
  InputQuantity,
  InputSearchBar,
  AddButton,
  SearchButton
}