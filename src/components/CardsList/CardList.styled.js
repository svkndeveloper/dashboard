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
margin-bottom: 18px;
cursor: pointer;

transition: all 250ms linear;
}
.dayname-text {
    position: relative;
}

.dayname-text-hide::after {
    content: "";
    // position: absolute;
    background-color: transparent;
    height: 1px;
    width: 100%;
    // top: 50%;
    
    transform: translateY(-50%);
    // border-bottom: 1px dashed #B9C3C8;
    background-image: repeating-linear-gradient(to right, transparent, transparent 4px, #B9C3C8 6px, #B9C3C8 12px);
}
.dayname-text-hide:hover::after {
    content: "";
   
    background-image: repeating-linear-gradient(to right, transparent, transparent 4px, #00D7FF 6px, #00D7FF 12px);
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
