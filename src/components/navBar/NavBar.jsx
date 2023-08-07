import { useNavigate, Link } from "react-router-dom"
import { Outlet } from "react-router-dom";

// Icons
import { FaChartLine } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';

// Styled
import {
    DesktopNavbar,
    DesktopNavItem,
    DesktopIcon,
    Detail
} from './NavBar.styled'


export function Nav() {
    const navigate = useNavigate();




    const handleStock = (e) => {
        e.preventDefault();
        return navigate('/dashboard/stock')
    }
    const handleVentas = (e) => {
        e.preventDefault();
        return navigate('/dashboard/ventas')
    }
    
    const handleList = (e) => {
        e.preventDefault();
        return navigate('/dashboard/productList')
    }

    return (
        <>
            <DesktopNavbar>
                <DesktopNavItem>
                    <DesktopIcon>
                        <FaChartLine />
                    </DesktopIcon>
                    <span onClick={handleStock}>
                        <Link to='/dashboard/stock'>
                            Stock
                        </Link>
                    </span>
                </DesktopNavItem>
                <DesktopNavItem>
                    <DesktopIcon>
                        <AiOutlineShoppingCart />
                    </DesktopIcon>
                    <span onClick={handleVentas} >Ventas</span>
                </DesktopNavItem>
                <DesktopNavItem>
                    <DesktopIcon>
                        <AiOutlineUnorderedList />
                    </DesktopIcon>
                    <span onClick={handleList} >Lista de productos</span>
                </DesktopNavItem>
            </DesktopNavbar >
            <Detail>
                <Outlet />
            </Detail>
        </>
    )
}