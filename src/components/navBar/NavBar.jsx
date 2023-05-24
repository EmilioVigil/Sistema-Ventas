import React, { useState, useEffect } from 'react';
import { FaBars, FaHome, FaUser, FaCog } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import {
    SidebarWrapper,
    CloseButton,
    NavItem,
    Icon,
    MainContent,
    ToggleButton,
    DesktopNavbar,
    DesktopNavItem,
    DesktopIcon
} from './NavBar.styled'


export function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsFirstRender(true);
    }, []);
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
                        <FaHome />
                    </Icon>
                    Home
                </NavItem>
                <NavItem>
                    <Icon>
                        <FaUser />
                    </Icon>
                    Profile
                </NavItem>
                <NavItem>
                    <Icon>
                        <FaCog />
                    </Icon>
                    Settings
                </NavItem>
            </SidebarWrapper>


            <DesktopNavbar>
                <DesktopNavItem>
                    <DesktopIcon>
                        <FaHome />
                    </DesktopIcon>
                    Home
                </DesktopNavItem>
                <DesktopNavItem>
                    <DesktopIcon>
                        <FaUser />
                    </DesktopIcon>
                    Profile
                </DesktopNavItem>
                <DesktopNavItem>
                    <DesktopIcon>
                        <FaCog />
                    </DesktopIcon>
                    Settings
                </DesktopNavItem>
            </DesktopNavbar>
            <MainContent>
                {/* Contenido principal de tu página */}
            </MainContent>
        </>
    )
}