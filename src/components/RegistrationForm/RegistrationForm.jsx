import { register } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { StyledInputsBlock, StyledForm , CssTextField} from "components/LoginForm/LoginForm.styled";
export const RegistrationForm = () => {
    const dispatch = useDispatch();
   
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
            <CssTextField label='password'  id="standard-basic" variant="standard" name='password' type='text'/>
            </StyledInputsBlock>
            <button className='submit-btn' type="submit">go!</button>
        </StyledForm>
    )
}