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