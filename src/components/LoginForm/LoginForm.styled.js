import { styled } from "styled-components";
import TextField from '@mui/material/TextField';
export const StyledForm = styled.form`
display: flex;
gap: 20px;
height: 200px;
.submit-btn {
        cursor: pointer;
    color: #FFF;
text-align: center;
font-family: HelveticaNeueCyr;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.48px;
display:flex;
justify-content: center;
align-items:center;
width: 52px;
height: 52px;
border-radius: 50%;
padding: 14px 8px;
border-color: transparent;
background-color: #F99943;
box-shadow: 0 0 3px 3px rgba(249, 153, 67, 0.5);
transition: all 300ms linear;
&:hover {
   background-color: #00D7FF;
   box-shadow: 0 0 5px 5px rgba(0, 215, 255, 0.4);
}
}
`

export const StyledInputsBlock = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const CssTextField = styled(TextField)({
    '& label': {
        color: '#F99943',
    },
    '& label.Mui-focused': {
        color: '#00D7FF',
    },
    '& input': {
        color: '#00D7FF',
    },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#F99943',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#00D7FF',
    },
         });
