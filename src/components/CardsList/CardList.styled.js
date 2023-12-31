import { styled } from "styled-components";
import { ReactComponent as ArrowSvg } from "../../images/selectarrow.svg";

export const StyledOtherSvg = styled(ArrowSvg)`
transform: ${({ $othercards }) => ($othercards ? 'rotate(180deg)' : 'none')};
width:14px;
height: 14px;

`
export const StyledTommorowSvg = styled(ArrowSvg)`
width:14px;
height: 14px;
transform: ${({ $tomorrowcards }) => ($tomorrowcards ? 'rotate(180deg)' : 'none')};
`

export const StyledDoneSvg = styled(ArrowSvg)`
width:14px;
height: 14px;
transform: ${({ $doneCards }) => ($doneCards ? 'rotate(180deg)' : 'none')};
`

export const StyledMainDiv = styled.div`

.dayname-text {
    position: relative;
    display: flex;
    align-items: center;
    gap: 3px;
    color: #282828;
font-family: Roboto;
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: 0.3px;
white-space: nowrap;

cursor: pointer;

transition: all 250ms linear;
}
.dayname-text {
    position: relative;
    margin-bottom: 18px;
}
.dayname-text-today{
        color: #282828;
font-family: Roboto;
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: 0.3px;
white-space: nowrap;
margin-bottom: 18px;

}

.dayname-text-hide::after {
    content: "";
    height: 1px;
    width: 100%;    
     border-bottom: 3px dashed #B9C3C8;

  // position: absolute;
    // background-color: transparent;
    // top: 50%;
    // transform: translateY(-50%);
    // background: repeating-linear-gradient(to right, transparent, transparent 4px, #B9C3C8 6px, #B9C3C8 12px);
}
.dayname-text-hide:hover::after {
    content: "";
   border-bottom-color: #00D7FF;
   
    // background: repeating-linear-gradient(to right, transparent, transparent 4px, #00D7FF 6px, #00D7FF 12px);
}


.dayname-text:not(:first-child) {
    margin-top: 24px;
}

@media screen and (min-width:768px ) {
    .dayname-text:hover {
    color: #00D7FF;
    transform: translateX(50px);
}
}
`

export const StyledCardList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;


@media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
}
@media screen and (min-width: 1280px) {
    
    gap: 32px;
}


`
