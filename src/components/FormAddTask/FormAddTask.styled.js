import { styled } from "styled-components";
import { Form, Field } from 'formik';
import { ReactComponent as ClearSvg } from '../../images/clear.svg';
import {ReactComponent as LineVertSvg} from '../../images/linevert.svg'
import { ReactComponent as StarSvg } from '../../images/star.svg';
import { ReactComponent as TrophySvg } from '../../images/trophy.svg';

export const StyledLabel = styled.label`
    color: ${({$cardtype}) => $cardtype === 'Challenge' ? '#fff' : '#B9C3C8'};
text-align: center;
font-family: Roboto;
font-size: ${({$cardtype}) => $cardtype === 'Challenge' ? '16px' : '12px'};
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.24px;
text-transform: uppercase;

`

export const StyledInputField = styled(Field)`

    margin: 0 auto;
    width: 163px;
    outline:none;
    border: none;
    color: #F99943;
    border-bottom: 1px solid #F99943;
    background-color: ${({$cardtype}) => $cardtype === 'Challenge' ? '#15395A' : ''};

&:focus {
    color: #00D7FF;
    border-bottom: 1px solid #00D7FF;
}
`

export const StyledTrophySvg = styled(TrophySvg)`
position:absolute;
top:20px;
right: 20px;
`

export const StyledStarSvg = styled(StarSvg)`
position:absolute;
top:20px;
right: 20px;
`

export const StyledClearSvg = styled(ClearSvg)`
transition: all 300ms linear;
&:hover {
  transform: rotate(180deg) scale(1.1);
}
`

export const StyledLineVertSvg = styled(LineVertSvg)`

`

export const StyledForm = styled(Form)`
padding-top: 70px;


.btns-block{
  position: absolute;
  right: 20px;
  bottom: 24px;
display: flex;
gap: 5px;
align-items: center;

}

.clear-button{
  cursor: pointer;
background-color: transparent;
border: none;

}
.start-button {
  cursor: pointer;
  background-color: transparent;
border: none;
color: #00D7FF;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.28px;
transition: all 250ms linear;
}
.start-button:hover {
  text-shadow: 1px 1px 2px #FF7F50;
  scale:1.1;
}

.addtask-name-block{
    display: flex;
    flex-direction: column;
    align-items center;
    gap: 5px;
}



.datepicker-div{
    display: flex;
    justify-content: center;
    gap:5px;
    align-items: flex-start;

margin: 10px auto;

}

.calendar-svg {
cursor: pointer;
}
.date-span:hover {
    color:#00D7FF;
}
.date-span {
    cursor: pointer;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 14px;
letter-spacing: 0.28px;
transition: all 300ms linear;
}
.span:hover .date-span {
    color:#00D7FF;
}

.react-datepicker__month-container{
    background-color: #FF851C;
}
.react-datepicker__time-container{
  position: absolute;
  width: 50px;
  right: -51px;
  border-bottom: 1px solid #FF851C;
  border-bottom-right-radius: 6px;
}
.react-datepicker__time-box{
  width: 50px !important;
 
}
.react-datepicker-popper{
  transform: translate3d(-25px, 130px,0) !important;
 
}
.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 2px;
}
.react-datepicker__day--selected:hover {
   background-color:#00D7FF; 
}
.react-datepicker__day--selected {
   background-color:#00D7FF; 
}
.react-datepicker__day-name {
   color:#fff; 
   width: 20px;
}  
.react-datepicker__header {
   background-color:#00D7FF; 
}
.react-datepicker__navigation-icon::before {
   border-color:#FF851C; 
}
.react-datepicker__month-container  {
   border-color:#FF851C; 
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #00D7FF;
  
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #00D7FF;
    color: white;
  height: 14px;
 
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{
 padding-left: 5px;
}
.react-datepicker__month-container{
  width: 200px;
}
.react-datepicker__month{
  margin: 0px;
}

.react-datepicker__time-list {
  height: 150px !important;
  overflow-x: hidden;
}
.react-datepicker__day {
  width: 20px;
  height: 24px;
}



.react-datepicker__time-list::-webkit-scrollbar {
  width: 6px;
}

.react-datepicker__time-list::-webkit-scrollbar-track {
  background: #FF851C;
}

.react-datepicker__time-list::-webkit-scrollbar-thumb {
  background: #00D7FF;
  border-radius: 10px;
}

.react-datepicker__time-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`