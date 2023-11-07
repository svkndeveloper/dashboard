import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';


export const StyledMainDiv = styled.div`


`

export const StyledTitle = styled.h2`
margin: 0;
color: #00D7FF;
font-family: HelveticaNeueCyr;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.48px;
`

export const StyledText = styled.p`
margin-top: 80px;
margin-bottom:35px;
width: 562px;
height: 135px;
color: #15395A;
font-family: HelveticaNeueCyr;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 1.25;
letter-spacing: 0.72px;
`

export const StyledNavText = styled.p`
color: #B9C3C8;
font-family: HelveticaNeueCyr;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 1.88;
letter-spacing: 0.48px;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    transition: all 250ms linear;
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