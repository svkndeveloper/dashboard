import { LoginForm } from "components/LoginForm/LoginForm";
import { RegisterLoginBase } from "./RegisterLoginBase/RegisterLoginBase";
import { StyledMainDiv } from "./Register.styled";
export const LoginPage = () => {
    return (
            <StyledMainDiv>
        <RegisterLoginBase/>
            <LoginForm />
            </StyledMainDiv>
    )
}