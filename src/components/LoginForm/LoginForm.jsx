import { logIn } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { StyledInputsBlock, StyledForm,CssTextField } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();
   
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
    dispatch(logIn({
        email: form.elements.email.value,
        password: form.elements.password.value
    }))
        form.reset();
}

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInputsBlock>
            <CssTextField label='email' id="standard-basic" variant="standard" name='email' type='text'  />
            <CssTextField label='password'   id="standard-basic" variant="standard" name='password' type='text'/>
            </StyledInputsBlock>
                
            <button className='submit-btn' type="submit">go!</button>
                    </StyledForm>
    )
}