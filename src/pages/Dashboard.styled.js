import { styled } from "styled-components";
import { ReactComponent as LogoutSvg } from '../images/logout.svg';
import { ReactComponent as ChallengeSvg } from '../images/challenge.svg';

export const StyledChallengeButton = styled(ChallengeSvg)`
cursor: pointer;
transition: all 350ms linear;
margin: 0 6px;
@media screen and (min-width: 768px){
   margin-left: auto;
   margin-right: 40px;;
}
&:hover {
    transform: scale(1.2);
}
`


export const StyledLogoutSvg = styled(LogoutSvg)`
cursor: pointer;

.first-path {
  transition: all 350ms 250ms ease;
}
.second-path {
  transition: all 500ms ease;
}

&:hover .first-path{
      fill: #00D7FF; 
      }

&:hover .second-path{
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
@media screen and (max-width:767px){
    flex-grow:1;
}
@media screen and (min-width:768px){
    font-size: 21px;
    letter-spacing: 0.42px;
    margin-right: 200px;
}
@media screen and (min-width:1280px){
    margin-right: 450px;
}
}

.first-letter{
 width: 30px;
 height: 30px;
 background-color: #3E4E6C;
 border-radius:50%;
 display:flex;
 justify-content: center;
 align-items: center;
color: #FFF;
font-family: Roboto;
font-size: 17px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 0.34px;
text-transform :uppercase;
}

.fullname-text{
    margin-left: 12px;
    color: #7B8AA4;
font-family: Roboto;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.34px;
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