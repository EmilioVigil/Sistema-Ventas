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
    Line,
    ContainerImg
} from './Login.styled'

export function Login() {
    return (
        <Container>

            <FormContainer>
                <Title>Sistema Ventas</Title>
                <Paragraph>
                    ¿Aún no tienes una cuenta? <Link to="/admin/ventas">Entra aquí</Link>
                </Paragraph>

                <InputContainer>
                    <FormGroup>
                        <Input type="text" placeholder=" " />
                        <Label htmlFor="name">Nombre</Label>
                        <Line />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" id="user" placeholder=" " />
                        <Label htmlFor="user">Usuario</Label>
                        <Line />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" id="password" placeholder=" " />
                        <Label htmlFor="password">Contraseña</Label>
                        <Line />
                    </FormGroup>
                    <Link to={'/admin/ventas'} >
                        <SubmitButton type="submit" value="Ingresar" />
                    </Link>
                    <Link to={'/admin/ventas'}>
                        <SubmitButton type='submit' value={'SignUp'} backgroundColor="#F26638" />
                    </Link>
                </InputContainer>
            </FormContainer>
            <ContainerImg>
                
            </ContainerImg>

        </Container>

    )
}
