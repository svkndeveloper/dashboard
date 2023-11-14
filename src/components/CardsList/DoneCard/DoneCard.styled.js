import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as AwardSvg } from '../../../images/award.svg';
export const StyledSpan = styled.span`

color: ${({$show})=> $show ? '#000' : '#00D7FF'};
text-decoration: ${({$show})=> $show ? '' : 'underline'};
font-size: 17px;
  overflow: ${({$show})=> $show ? '' : 'hidden'};
  text-overflow: ${({$show})=> $show ? '' : 'ellipsis'};
  width: ${({$show})=> $show ? '130px' : '110px'};
  word-wrap: ${({$show})=> $show ? 'break-word' : ''};
  letter-spacing: 1px;
  z-index:100;
`
export const StyledTitle = styled.span`
// position: absolute;
// top:15px;
// left: 10px;




     
    // text-align:center;
    color: ${({$cardtype})=> $cardtype === 'Challenge' ? "#fff" : "#282828" };

font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media screen and (min-width:768px) {
    font-size: 16px;
    }

`
const fadeInOut = keyframes`
  from {
    opacity: 0;
    transform: translate(450px, -450px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
const fadeInOutAnimation = css`
  animation: ${fadeInOut} 1500ms ease;
`;
export const StyledAwardSvg = styled(AwardSvg)`
position: absolute;
top:60px;
left:70px;
 ${({ $award }) =>
    $award &&
     css`.arrow-first-part,
    .arrow-second-part {
      ${fadeInOutAnimation}
    }
  `}

  @media screen and (min-width:768px){
    top:40px;
left:40px;
  }
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

&:hover {
  box-shadow: 0 8px 16px rgba(0, 215, 255, 0.3); 
}
@media screen and (min-width:768px) {
      // width: calc((100% - 32px) / 3);
height: 208px;
 width: 224px;
}
@media screen and (min-width:1280px) {
        // width: calc((100% - 128px) / 5);
}

.difficulty{
    position: absolute;
    bottom:25px;
    right:20px;
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


position: absolute;
transform: rotate(-90deg);
left: -20px;
top: 85px;
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

.date-time{
    color: #B9C3C8;
text-align: center;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.36px;
margin-top: 10px;
width: 120px;

position: absolute;
transform: rotate(90deg);
right: -40px;
top: 80px;

@media screen and (min-width:768px) {
    font-size: 14px;
    letter-spacing: 0.28px;
    }
}
`