import { styled } from "styled-components";
import { ReactComponent as CheckSvg } from '../../../images/check.svg'
import {ReactComponent as SaveSvg} from '../../../images/save.svg'
import { ReactComponent as StarSvg } from '../../../images/star.svg'
import { ReactComponent as TrophySvg } from '../../../images/trophy.svg';

export const StyledTrophySvgAction = styled(TrophySvg)`
position:absolute;
top:20px;
right: 20px;
cursor: pointer;
transition: transform 0.5s ease;
&:hover {
    transform: scale(1.4);
}
`

export const StyledStarSvgBlue = styled(StarSvg)`
position:absolute;
top:20px;
right: 20px;
cursor: pointer;
transition: transform 0.5s ease;
& path {
    fill:#00D7FF;
}
&:hover {
    transform: scale(1.4) rotate(360deg);
}
`

export const StyledCheckSvg = styled(CheckSvg)`

`

export const StyledSaveSvg = styled(SaveSvg)`

`

export const StyledLi = styled.li`
background-color: ${({$cardtype})=> $cardtype === 'Challenge' ? "#15395A" : "#fff" };
position:relative;
width: 280px;
height: 260px;
border: 1px solid #B9C3C8;
border-radius: 13px;
cursor: pointer;
transition: box-shadow 0.3s ease;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

 ${({ $overtimed }) =>
      $overtimed === 'true' &&
      `
      &:hover{
        background-color: red;
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        height: 2px;
        background-color: #DB0837;
      }
         &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    `}



&:hover {
  box-shadow: 0 8px 16px rgba(0, 215, 255, 0.3); 
}
@media screen and (min-width:768px) {
    // width: 224px;
    width: calc((100% - 32px) / 3);
height: 208px;
}
@media screen and (min-width:1280px) {
    
    width: calc((100% - 128px) / 5);


}

.difficulty{
    position: absolute;
    top:20px;
    left:35px;
color: #B9C3C8;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.32px;

@media screen and (min-width:768px) {
 font-size: 14px;
letter-spacing: 0.28px;
}
}

.circle{
      display: inline-block;
    position: absolute;
    left: -15px;
    top: 4px;
width: 10px;
height: 10px;
border-radius: 50%;
@media screen and (min-width:768px) {
width: 8px;
height: 8px;
}
}

.category{
    display: block;
    width: 120px;
    height: 35px;
    position: absolute;
    bottom: 20px;
   border-radius: 0px 15px 15px 0px;
     padding-left: 21px;
   text-transform: uppercase;
    color: #282828;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 34px;
letter-spacing: 0.28px;

@media screen and (min-width: 768px) {
   width: 88px;
    height: 25px;
    line-height: 26px;
    letter-spacing: 0.22px;
    font-size: 11px;
}

}

.infoblock{
    position:absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%, -50%);
    width: 154px;
}

.title{

    width: 100%;
    word-wrap: break-word; 
    text-align:center;
    color: ${({$cardtype})=> $cardtype === 'Challenge' ? "#fff" : "#282828" };
text-align: center;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media screen and (min-width:768px) {
    font-size: 16px;
    }
}

.challenge-text {
color: #B9C3C8;
text-align: center;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.28px;
text-transform: uppercase;
margin-bottom: 5px;
}

.date-time{
    color: #B9C3C8;
text-align: center;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.36px;
margin-top: 5px;

@media screen and (min-width:768px) {
    font-size: 14px;
    letter-spacing: 0.28px;
    }
}

.date-time.overtimed-date-time{
font-size: 30px;
color: red;
}

`