import styled from "styled-components";

// Estilos del componente emergente
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border : 2px solid black;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  width: 50rem;
  height: auto;
  padding: 20px;
  margin : auto;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  gap: 2em;
  flex-direction: column;
`;


const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto;
`;

const Title = styled.h3`
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const SearchButton = styled.button`
  background-color: #f2f2f2;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export {
  ModalWrapper,
  ModalContent,
  CloseButton,
  Title,
  Form,
  Input,
  SearchButton
}
