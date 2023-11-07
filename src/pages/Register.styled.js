import { styled } from "styled-components";
import firstBg from 'images/firstLandsapeBg1x-min.png';
// import firstBg2x from 'images/firstLandsapeBg2x-min.png';
import secondBg from 'images/secondLandsapeBg1x-min.png';
// import secondBg2x from 'images/secondLandsapeBg2x-min.png';

export const StyledMainDiv = styled.div`
padding-top: 150px;
padding-left: 229px;
// height:100vh; 
background-image: url(${firstBg}), url(${secondBg});
background-repeat: no-repeat;
// background-size: 707px 470px, 1441px 716px;
background-position: top 0 right 0, top 270px right 0px;
`