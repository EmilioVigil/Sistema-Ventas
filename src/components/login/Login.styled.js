import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const hoverAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #ff9900;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color : black;
`;

const LoginSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export {
    LoginButton,
    LinkStyled,
    LoginSection
}