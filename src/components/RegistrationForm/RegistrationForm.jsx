import { register } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { StyledInputsBlock, StyledForm , CssTextField,StyledEye,StyledEye1} from "components/LoginForm/LoginForm.styled";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
   const [showPassword, setShowPassword] = useState(false);
 
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
           
        dispatch(register({
        email: form.elements.email.value,
        password: form.elements.password.value
    }))
        form.reset();
    }
    
    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInputsBlock>
            <CssTextField label='name' id="standard-basic" variant="standard" name='name' type='text' />
            <CssTextField label='email'  id="standard-basic" variant="standard" name='email' type='text'/>
                <CssTextField label='password' id="standard-basic" variant="standard" name='password' type={showPassword ? 'text' : 'password'}/>
                <button className='password-btn' type='button' onClick={toggleShowPassword}>{!showPassword ? <StyledEye/> : <StyledEye1/>}</button>
            </StyledInputsBlock>
            <button className='submit-btn' type="submit">go!</button>
        </StyledForm>
    )
}