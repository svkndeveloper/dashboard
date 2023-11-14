import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';


export const StyledMainDiv = styled.div`


`

export const StyledTitle = styled.h2`
margin: 0;
color: #00D7FF;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.48px;

@media screen and (min-width:768px){
 font-size: 20px;
letter-spacing: 0.4px;
}

@media screen and (min-width:1280px){
font-size: 24px;
letter-spacing: 0.48px;
}
`

export const StyledText = styled.p`
width: 281px;
color: #15395A;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 1.61;
letter-spacing: 0.36px;
margin-top: 20px;
margin-bottom:32px;

@media screen and (min-width: 768px){
width: 375px;
font-size: 24px;
line-height: 1.38;
letter-spacing: 0.48px;
margin-bottom:40px;
}

@media screen and (min-width: 1280px){
margin-top: 80px;
margin-bottom:35px;
width: 562px;
height: 135px;
font-size: 36px;
line-height: 1.25;
letter-spacing: 0.72px;
}

`

export const StyledNavText = styled.p`
color: #B9C3C8;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 3.21;
letter-spacing: 0.28px;
margin-bottom: 22px;

@media screen and (min-width: 768px){

font-size: 18px;
line-height: 2.5;
letter-spacing: 0.36px;
}

@media screen and (min-width: 1280px){
font-size: 24px;
line-height: 1.88;
letter-spacing: 0.48px;
}

`

export const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    transition: all 250ms linear;
    font-size: 18px;
    @media screen and (min-width: 768px){
font-size: 22px;
    }
       @media screen and (min-width: 1280px){
      font-size: 28px;
    }
  &.active {
    color: #00D7FF;
    cursor: default;
  }
    &:not(.active) {
    color: grey;

    &:hover {
      color: #F99943;
    }
  }
`;