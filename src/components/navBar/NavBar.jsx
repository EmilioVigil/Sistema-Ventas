import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom";

// Icons
import { FaChartLine, FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
// Styled
import {
    SidebarWrapper,
    CloseButton,
    NavItem,
    Icon,
    ToggleButton,
    DesktopNavbar,
    DesktopNavItem,
    DesktopIcon,
    Detail
} from './NavBar.styled'


export function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(false);
    const navigate = useNavigate();
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsFirstRender(true);
    }, []);


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
            {isFirstRender && (
                <ToggleButton onClick={toggleNavbar}>
                    {isOpen ? '' : <FaBars size={24} />}
                </ToggleButton>
            )}
            <SidebarWrapper isOpen={isOpen}>
                <CloseButton onClick={toggleNavbar}>
                    <IoMdClose size={24} />
                </CloseButton>
                <NavItem>
                    <Icon>
                        <FaChartLine />
                    </Icon>
                    Dashboard
                </NavItem>
                <NavItem>
                    <Icon>
                        <AiOutlineShoppingCart />
                    </Icon>
                    Ventas
                </NavItem>
                <NavItem>
                    <Icon>
                        <AiOutlineUnorderedList />
                    </Icon>
                    Lista de productos
                </NavItem>
            </SidebarWrapper>


            <DesktopNavbar>
                <DesktopNavItem>
                    <DesktopIcon>
                        <FaChartLine />
                    </DesktopIcon>
                    <span onClick={handleStock}>
                        Stock
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