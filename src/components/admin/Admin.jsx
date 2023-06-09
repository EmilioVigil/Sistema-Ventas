import { Outlet } from "react-router-dom";
import { SideBar } from "../navBar/NavBar";
import {
    ContainerSideBar
} from './Admin.styled'

export function Admin() {
    return (
        <>
            <ContainerSideBar>
                <SideBar />
            </ContainerSideBar>
        </>
    )
}