import { RegistrationForm } from "components/RegistrationForm/RegistrationForm";
import { RegisterLoginBase } from "./RegisterLoginBase/RegisterLoginBase";
import { StyledMainDiv } from "./Register.styled";
import { animated , useTransition} from 'react-spring';
export const RegisterPage = () => {
      const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 150ms',
    },
    leave: { opacity: 0, transform: 'translateY(100%)' },
    delay: 250,
  })
    return (
        transitions(
          (styles, item) =>
         item && (
        <animated.div style={styles}>
                       <StyledMainDiv>
        <RegisterLoginBase/>
              <RegistrationForm/>
        </StyledMainDiv>
       </animated.div>
        
         ))
    )
}