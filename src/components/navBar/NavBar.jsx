import { Link, useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom";

// Icons
import { IconContext } from 'react-icons';
import { FaChartLine } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';

// Styled
import {
    Navbar,
    ItemContainer,
    NavItem,
    Icon,
    Detail
} from './NavBar.styled'


export function Nav() {

    const dataNav = [
        { title: 'Ventas', path: '/dashboard/ventas' , icon : 'AiOutlineShoppingCart'},
        { title: 'Lista de productos', path: '/dashboard/productList' , icon : 'AiOutlineUnorderedList'},
        { title: 'Stock', path: '/dashboard/stock' , icon : 'FaChartLine'},
        { title: 'Admin', path: '/dashboard/admin' , icon : 'AiOutlineShoppingCart'}
    ]

    const { pathname } = useLocation();
    
    
    return (
        <>
            <Navbar>
                
                <h2>
                    Sistema Ventas
                </h2>

                <ItemContainer>
                <IconContext.Provider value={{ size: '2em' }}>
                    {dataNav.map(({title, path, icon}) => {
                        const IconComponent = eval(icon);  // Convertir el nombre del icono en un componente
                        return (
                            <NavItem key={title} itemAct = {`${pathname === path ? "itemAct" : ""}`}>
                                <Icon>
                                <IconComponent />
                                </Icon>
                                <span>
                                    <Link to={path} >
                                        {title}
                                    </Link>
                                </span>
                        </NavItem>
          );
        })}
                </IconContext.Provider>

                </ItemContainer>
                
            </Navbar >

            <Detail>
                <Outlet />
            </Detail>
        </>
    )
}