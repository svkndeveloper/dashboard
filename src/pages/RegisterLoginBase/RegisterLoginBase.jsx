import { StyledMainDiv,StyledTitle, StyledText, StyledNavText, StyledNavLink} from "./RegisterLoginBase.styled";
export const RegisterLoginBase = () => {
    return (
        <StyledMainDiv>
            <StyledTitle>
                Questify
            </StyledTitle>
            <StyledText>
                Questify will turn your life into
a thrilling game full of amazing
quests and exciting challenges.
            </StyledText>
            <StyledNavText>
                Choose your name to <StyledNavLink to="/">sign up</StyledNavLink> or <StyledNavLink to="/login">log in</StyledNavLink>
            </StyledNavText>
             
        </StyledMainDiv>
      
    )
}