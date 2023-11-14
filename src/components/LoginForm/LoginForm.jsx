import { logIn } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { StyledInputsBlock, StyledForm,CssTextField,StyledEye,StyledEye1,FormControlWrap } from "./LoginForm.styled";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from "helpers/validationSchema";
export const LoginForm = () => {
  const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
 
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };
const initialValues = {
    email: '',
    password: '',
  };
  return (
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
        <StyledForm as={Form}>
            <StyledInputsBlock>
             <Field
            as={CssTextField}
            label="email"
            id="standard-basic"
            variant="standard"
            name="email"
            type="text"
          />
          <ErrorMessage name="email" component="div" />
          <FormControlWrap>
             <Field
             style={{width: '100%'}}
            as={CssTextField}
            label="password"
            id="standard-basic"
            variant="standard"
            name="password"
            type={showPassword ? 'text' : 'password'}
            />
             <button className='password-btn-login'
            type='button' onClick={toggleShowPassword}>{!showPassword ? <StyledEye /> : <StyledEye1 />}</button>
          </FormControlWrap>
    
          <ErrorMessage name="password" component="div" />
         
            </StyledInputsBlock>
                
            <button className='submit-btn' type="submit">go!</button>
                    </StyledForm>
     </Formik>
    )
}