import { styled } from "styled-components";
import { Form } from 'formik';

export const StyledForm = styled(Form)`
padding-top: 70px;

.addtask-name-block{
    display: flex;
    flex-direction: column;
    align-items center;
    gap: 5px;
}
#taskInput {
    margin: 0 auto;
    width: 163px;
    outline:none;
    border: none;
    color: #F99943;
    border-bottom: 1px solid #F99943;
}
#taskInput:focus {
    color: #00D7FF;
    border-bottom: 1px solid #00D7FF;
}

.task-label{
    color: #B9C3C8;
text-align: center;
font-family: HelveticaNeueCyr;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.24px;
text-transform: uppercase;
}
`