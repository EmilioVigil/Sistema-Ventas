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
`;

const ModalContent = styled.div`
  width: 50rem;
  height: 35rem;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
`;


export {
  ModalWrapper,
  ModalContent
}
