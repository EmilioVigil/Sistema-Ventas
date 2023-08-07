import styled, { keyframes, css } from 'styled-components';


const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const SidebarWrapper = styled.div`
 display: none;
 position: fixed;
 top: 0;
 left: 0;
 height: 100vh;
 width: 300px;
 background-color: #18273E;
 overflow: hidden;
 z-index: 999;
${(props) =>
    props.isOpen &&
    css`
    display: block;
      transition: transform 0.3s ease;
      transform: translateX(0%);
      animation: ${slideIn} 0.3s ease;
    `}

  ${(props) =>
    !props.isOpen &&
    css`
      transform: translateX(-100%);
      animation: ${slideOut} 0.3s ease;
    `}

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    z-index: 999;
    transform: translateX(-100%);
    ${(props) =>
    props.isOpen &&
    css`
        transform: translateX(0%);
      `}
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ddd;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
`;


const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
  }
`;


//    DESKTOP
const DesktopNavbar = styled.nav`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width:100vw;
    gap : 5rem;   
    background-color: #003D5B ;
    margin : 0;
  }
`;

const DesktopNavItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  color: #fff;
  transition: background-color 0.3s ease;
  cursor:pointer;



  &:hover {
    background-color: #EDAE49;
  }
`;

const DesktopIcon = styled.div`
  margin-right: 1rem;
`;

const Detail = styled.div`
  flex:1;

`

export {
  SidebarWrapper,
  CloseButton,
  NavItem,
  Icon,
  ToggleButton,
  DesktopNavbar,
  DesktopNavItem,
  DesktopIcon,
  Detail

}