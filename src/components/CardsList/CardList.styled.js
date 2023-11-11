import { styled } from "styled-components";

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