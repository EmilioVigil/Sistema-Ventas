import styled  from 'styled-components';

//    DESKTOP
const Navbar = styled.nav`
    height: 120px;
    width:100vw;
    display: flex;
    flex-direction: row;
    background-color: #0162E5 ;
    margin : 0;

  h2{
    margin-left: 20px;
    color : #ffa726;
    text-align: center;
  }

`;

const ItemContainer = styled.div`
  padding : 2rem;
  display : flex;
  flex : 1;
  flex-direction : row;
  justify-content : space-evenly;

`

const NavItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  color: #fff;
  transition: background-color 0.3s ease;
  cursor:pointer;
  transition: border-bottom .3s;
  
  ${props =>
    props.itemAct === 'itemAct' &&
    `
    border-bottom : 3px solid #ffa726 ; 
  
  `}


  &:hover {
    border-bottom : 3px solid #ffa726 ; 
  }

  span{
    a{
      text-decoration: none;
      color : #fff;
      font-weight: bold;
      font-size: 1.2em;
    }
  }

`;

const Icon = styled.div`
  margin-right: 1rem;
`;

const Detail = styled.div`
  flex:1;

`

export {
  Navbar,
  ItemContainer,
  NavItem,
  Icon,
  Detail

}