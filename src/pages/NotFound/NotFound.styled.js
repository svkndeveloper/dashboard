import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import {ReactComponent as ErrorSvg} from '../../images/errorsvg.svg'
export const StyledNotFoundDiv = styled.div`
background-color: rgba(255,133,28,0.2);
width: 100vw;
height: 100vh;
position: relative;
`
export const StyledErrorBlock = styled.div`
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
width: 300px;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
padding:40px 0;
gap: 25px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 215, 255, 0.3), 0 0 20px 20px rgba(0, 215, 255, 0.6);
@media screen and (min-width: 768px) {
width: 400px;
}
.title{
    color: #00D7FF;
font-family: Roboto;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.42px;
}
`
export const StyledErrorSvg = styled(ErrorSvg)`

`

export const StyledNavLink = styled(NavLink)`
display: inline-block;
      padding: 10px 20px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: #fff;
      background-color: #00D7FF;
      border: 2px solid #00D7FF;
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

      &:hover {
      background-color: #FF851C;
      color: #fff;
    }
`