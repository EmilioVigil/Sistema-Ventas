import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #e5e5f7;
  background-image: radial-gradient(#da38b8 0.5px, transparent 0.5px),
    radial-gradient(#da38b8 0.5px, #e5e5f7 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  background-color: #fff;
  margin: auto;
  width: 20rem;
  max-width: 400px;
  padding: 4.5em 3em;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

const Paragraph = styled.p`
  font-weight: 300;
`;

const InputContainer = styled.div`
  margin-top: 3em;
  display: grid;
  gap: 2.5em;
`;

const FormGroup = styled.div`
  position: relative;
  --color: #5757577e;
`;

const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background-color: none;
  color: #706c6c;
  font-size: 1rem;
  padding: 0.6em 0.3em;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color);

  &:not(:placeholder-shown) {
    color: #4d4646;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-12px) scale(0.7);
    transform-origin: left top;
    color: #3866f2;
  }
`;

const Label = styled.label`
  color: var(--color);
  cursor: auto;
  position: absolute;
  top: 0;
  left: 5px;
  transform: translateY(10px);
  transition: transform 0.5s, color 0.3s;
`;

const SubmitButton = styled.input`
  width: 20rem;
  cursor: pointer;
  background-color: #3866f2;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  padding: 0.8em 0;
  border: none;
  border-radius: 0.5em;
`;

const Line = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3866f2;
  transform: scale(0);
  transform: left bottom;
  transition: transform 0.4s;
`;



export {
  Container,
  FormContainer,
  Title,
  Paragraph,
  InputContainer,
  FormGroup,
  Input,
  Label,
  SubmitButton,
  Line
}