import { styled } from "styled-components";

export const StyledOverlay = styled.div`
border-radius: 10px;
background: rgba(21, 57, 90, 0.30);
position: absolute;
width: 100%;
height: 100%;
top:0;
left: 0;
`
export const StyledModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 163px;
height: 77px;
padding-top: 24px;
padding-left: 30px;
border-radius: 10px;
background: #FFF;
box-shadow: 3px 4px 4px 0px rgba(21, 57, 90, 0.03), -3px -4px 4px 0px rgba(21, 57, 90, 0.03);
cursor: auto;
`

export const StyledInfoBlock = styled.div`
width: 100px;
`

export const StyledButtonBlock = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`

export const StyledQuestion = styled.p`
color: #282828;
text-align: center;
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 550;
line-height: normal;
margin-bottom:12px;
`

export const StyledCancelButton = styled.button`
border: none;
background-color: transparent;
color: #24D40C;
text-align: center;
font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
cursor: pointer;
transition: all 250ms linear;
&:hover {
    transform: scale(1.25);
}
`

export const StyledDeleteButton = styled.button`
border: none;
background-color: transparent;
color: #DB0938;
text-align: center;
font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
cursor: pointer;
transition: all 250ms linear;
&:hover {
    transform: scale(1.25);
}
`