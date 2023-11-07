import { RegistrationForm } from "components/RegistrationForm/RegistrationForm";
import { RegisterLoginBase } from "./RegisterLoginBase/RegisterLoginBase";
import { StyledMainDiv } from "./Register.styled";
export const RegisterPage = () => {
    return (
        <StyledMainDiv>
        <RegisterLoginBase/>
              <RegistrationForm/>
        </StyledMainDiv>
      
    )
}