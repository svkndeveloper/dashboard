import { styled } from "styled-components";
import {ReactComponent as PlusSvg} from 'images/plus.svg'
export const StyledAddTaskButton = styled.button`
position: fixed;
bottom: 40px;
right: 40px;
cursor: pointer;
padding:0;
width: 52px;
height: 52px;
background-color: #F99943;
border-color: transparent;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 3px 3px rgba(249, 153, 67, 0.5);
transition: all 300ms linear;
&:hover {
  scale: 1.1;
   background-color: #00D7FF;
   box-shadow: 0 0 5px 5px rgba(0, 215, 255, 0.4);
}
`

export const StyledPlusSvg = styled(PlusSvg)`
width:28px;
height: 28px;
transition: all 300ms linear;
${StyledAddTaskButton}:hover & {
    transform: rotate(180deg) scale(1.2);
    // path {
    //             stroke: black;
    // }
}
`