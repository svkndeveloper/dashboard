import { styled } from "styled-components";
import { ReactComponent as CheckSvg } from '../../../images/check.svg'
import {ReactComponent as SaveSvg} from '../../../images/save.svg'

export const StyledCheckSvg = styled(CheckSvg)`

`

export const StyledSaveSvg = styled(SaveSvg)`

`

export const StyledLi = styled.li`
position:relative;
width: 224px;
height: 208px;
border: 1px solid #B9C3C8;
border-radius: 13px;

.difficulty{
    position: absolute;
    top:20px;
    left:35px;
color: #B9C3C8;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.28px;
}

.circle{
      display: inline-block;
    position: absolute;
    left: -15px;
    top: 4px;
width: 8px;
height: 8px;
border-radius: 50%;
}

.category{
    display: block;
    width: 88px;
    height: 25px;
    position: absolute;
    bottom: 20px;
   border-radius: 0px 15px 15px 0px;
     padding-left: 24px;
   text-transform: uppercase;
    color: #282828;
font-family: Roboto;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.22px;
}

.infoblock{
    position:absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%, -50%);
    width: 140px;
}

.title{
    width: 100%;
    word-wrap: break-word; 
    text-align:center;
    color: #282828;
text-align: center;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.date-time{
    color: #B9C3C8;
text-align: center;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.28px;
margin-top: 10px;
}
`