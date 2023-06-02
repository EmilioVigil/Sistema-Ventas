
// Styled
import { LoginButton, LinkStyled, LoginSection } from "./Login.styled"

export function Login() {
    return (
        <LoginSection>
            <h1>Login Page</h1>
            <LoginButton>
                <LinkStyled to={'/admin/ventas'} >Login</LinkStyled>
            </LoginButton>
        </LoginSection>

    )
}