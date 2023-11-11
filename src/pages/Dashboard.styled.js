import { styled } from "styled-components";
export const StyledHeader = styled.div`
height: 60px;
background: #242A37;
box-shadow: 0px 4px 4px 0px rgba(36, 42, 55, 0.10);


`
export const StyledHeaderContainer = styled.div`
width: 100%;
max-width:320px;
margin: 0 auto;
padding: 0 20px;    

@media screen and (min-width: 768px){
    max-width:768px;
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
padding: 0 20px;    

@media screen and (min-width: 768px){
    max-width:768px;
}
@media screen and (min-width: 1280px){
    max-width:1280px;
}
`