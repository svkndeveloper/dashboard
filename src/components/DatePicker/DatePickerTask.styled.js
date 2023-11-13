import { styled } from "styled-components";


export const StyledSpan = styled.span`
color: ${({$cardtype}) => $cardtype === 'Challenge' ? '#fff' : '#282828'};
`