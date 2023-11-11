import { styled } from "styled-components";
import firstBg from 'images/firstLandsapeBg1x-min.png';
// import firstBg2x from 'images/firstLandsapeBg2x-min.png';
import secondBg from 'images/secondLandsapeBg1x-min.png';
// import secondBg2x from 'images/secondLandsapeBg2x-min.png';
import bgRect from '../images/bgRect.png';
import bgRect2 from '../images/bgRect2.png';


export const StyledMainDiv = styled.div`
overflow-x: hidden;
width: 100%;
max-width: 320px;
height: 648px;
margin: 0 auto;
    padding-top: 60px;
padding-left: 20px;


@media screen and (min-width: 768px){
    max-width: 768px;
    height: 1024px;
    padding-top: 300px;
    // background-image: url(${firstBg}), url(${secondBg});
    // background-repeat: no-repeat;
    // background-position: top 0 right 0, top 270px right 5px;
}

@media screen and (min-width: 1280px){
    max-width: 1280px;
    height: 850px;
    padding-top: 90px;
padding-left: 229px;
// height:100vh; 
// background-image: url(${firstBg}), url(${secondBg});
// background-position: top 0 right 0, top 270px right 5px;
}

.backgrounds-div{
             position: absolute;
    top:0;
    left:0;
    z-index: -1;
    height: 100vh;
    width: 100vw;
@media screen and (max-width: 767px){
   background-image: url(${bgRect}), url(${bgRect2}); 
       background-repeat: no-repeat;
    background-position: bottom 0 right 0, bottom 0px right 0px;
}

    @media screen and (min-width:768px){
  
background-image: url(${firstBg}), url(${secondBg});
    background-repeat: no-repeat;
    background-position: top 0 right 0, bottom 0px right 15px;
    }
 
}
`

