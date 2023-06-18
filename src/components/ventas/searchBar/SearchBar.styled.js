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

    &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }


`

const InputQuantity = styled.input`
  width: 150px;
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

export {
    SectionSearchProduct,
    InputQuantity,
    InputSearchBar
}