import { Link } from 'react-router-dom'

// Styled
import {
    Container,
    FormContainer,
    Title,
    Paragraph,
    InputContainer,
    FormGroup,
    Input,
    Label,
    SubmitButton,
    Line
} from './Login.styled'

export function Login() {
    return (
        <Container>
            <FormContainer>
                <Title>Inicia sesion</Title>
                <Paragraph>
                    ¿Aún no tienes una cuenta? <Link to="/admin/ventas">Entra aquí</Link>
                </Paragraph>

                <InputContainer>
                    <FormGroup>
                        <Input type="text" placeholder=" " />
                        <Label htmlFor="name">Nombre</Label>
                        <Line className="form__line" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" id="user" placeholder=" " />
                        <Label htmlFor="user">Usuario</Label>
                        <Line className="form__line" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" id="password" placeholder=" " />
                        <Label htmlFor="password">Contraseña</Label>
                        <Line className="form__line" />
                    </FormGroup>
                    <Link to={'/admin/ventas'} >
                        <SubmitButton type="submit" value="Entrar" />
                    </Link>
                </InputContainer>
            </FormContainer>
        </Container>

    )
}