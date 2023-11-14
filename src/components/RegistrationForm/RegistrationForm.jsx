import { register } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { StyledInputsBlock, StyledForm , CssTextField,StyledEye,StyledEye1,FormControlWrap} from "components/LoginForm/LoginForm.styled";
import { setCurrentUser } from "redux/auth/slice";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from "helpers/validationSchema";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const RegistrationForm = () => {
    const dispatch = useDispatch();
   const [showPassword, setShowPassword] = useState(false);
 
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
    const handleSubmit = (values) => {
        if (!values.name) return toast.warn('Enter your name!', {
position: "top-center",
autoClose: 2500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
    dispatch(register({ email: values.email, password: values.password }));
    dispatch(setCurrentUser(values.name));
 
  };
    const initialValues = {
        name: '',
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
            label="name"
            id="standard-basic"
            variant="standard"
            name="name"
             type="text"
          />
          <ErrorMessage name="name" component="div" />
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
                         <button className='password-btn' type='button' onClick={toggleShowPassword}>{!showPassword ? <StyledEye/> : <StyledEye1/>}</button>
                    </FormControlWrap>
      
          <ErrorMessage name="password" component="div" />
               
            </StyledInputsBlock>
            <button className='submit-btn' type="submit">go!</button>
            </StyledForm>
            </Formik>
    )
}