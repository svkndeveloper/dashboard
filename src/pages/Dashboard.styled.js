import { styled } from "styled-components";
import { ReactComponent as LogoutSvg } from '../images/logout.svg';

export const StyledLogoutButton = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
`

export const StyledLogoutSvg = styled(LogoutSvg)`

transition: fill 1300ms linear;
${StyledLogoutButton}:hover & path {
    fill: #00D7FF;
}
`

export const StyledHeader = styled.div`
height: 60px;
background: #242A37;
box-shadow: 0px 4px 4px 0px rgba(36, 42, 55, 0.10);


`
export const StyledHeaderContainer = styled.div`
width: 100%;
height: 100%;
max-width:320px;
margin: 0 auto;
padding: 0 20px;    
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (min-width: 768px){
    max-width:768px;
    padding: 0 32px;
}
@media screen and (min-width: 1280px){
    max-width:1280px;
}

.title{
    color: #00D7FF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.36px;
}
`
export const StyledMainDiv = styled.div`
background-color: #F2F3F7;
min-height: 100vh;
`

export const StyledContainer = styled.div`
width: 100%;
max-width:320px;
margin: 0 auto;
padding: 28px 20px;    
position: relative;
overflow:hidden;
@media screen and (min-width: 768px){
    max-width:768px;
    padding: 28px 32px; 
}
@media screen and (min-width: 1280px){
    max-width:1280px;
    padding: 28px 16px;  
}

`