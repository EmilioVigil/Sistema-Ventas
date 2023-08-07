import styled  from 'styled-components';

//    DESKTOP
const DesktopNavbar = styled.nav`
    display: flex;
    flex-direction: column;
    width:100vw;
    gap : 5rem;   
    background-color: #003D5B ;
    margin : 0;
  
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
  DesktopNavbar,
  DesktopNavItem,
  DesktopIcon,
  Detail

}