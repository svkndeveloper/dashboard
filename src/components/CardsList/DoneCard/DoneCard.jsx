import { StyledLi, StyledAwardSvg , StyledTitle,StyledSpan} from "./DoneCard.styled"
import { getDifficultyColor, getCategoryBackgroundColor } from "helpers/hooks";
import { formatJustDateToWord } from "helpers/formatJustDate";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useState } from "react";
import { useTransition } from 'react-spring';
import { StyledAnimatedDiv } from "../Card/Card.styled";
export const DoneCard = ({ card }) => {
    const { _id, title, difficulty, time, date, category, type } = card;
    const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(true);
  const [showHiddenText, setShowHiddenText] = useState(false);
  const colorDiff = getDifficultyColor(difficulty)
  const categoryBackgroundColor = getCategoryBackgroundColor(category);
  const handleCloseModal = () => {
        setShowModal(false);
  }
  const handleDeleteAnimation = () => {
   setIsDeleted(false)
  }
  const transitions = useTransition(isDeleted, {
    from: { opacity: 0, transform: 'translate3d(-300px,0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0.1px, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-300px, 0, 0)' },
    config: { duration: 400 },
 
    delay: 100,
    })


  return (
      transitions(
                (styles, item) =>
                    item && (
                           <StyledAnimatedDiv style={styles}>
                           
                
        <StyledLi $cardtype={type}
            onClick={() => {
            if (showModal) return;
            setShowModal(true)
        }}>
                <>
                  <span className='difficulty' ><span className='circle' style={{ backgroundColor: colorDiff }}></span>{difficulty}</span>
                    <span className='category' style={{ backgroundColor: categoryBackgroundColor }}>{category}</span>
            {/* <div className='infoblock'> */}
                {type === 'Challenge' && <p className="challenge-text">Challenge</p>}
                  <p style={{ position: 'absolute', top: '15px', left: '10px', maxWidth: '200px', display: 'flex' }}>
                    <StyledTitle $cardtype={type}>Completed: </StyledTitle>
                    <StyledSpan
                      $show={showHiddenText}
                      onMouseEnter={() => setShowHiddenText(true)}
                      onMouseLeave={() => setShowHiddenText(false)}>{title}</StyledSpan>
                  </p>
                <p className='date-time'>{`${formatJustDateToWord(date)}, ${time}`}</p>
                  {/* </div> */}
                </> 
                <StyledAwardSvg />
              
                {showModal && <ModalDelete handleDeleteAnimation={handleDeleteAnimation}  handleCloseModal={handleCloseModal} _id={_id} />} 
        </StyledLi>
                 </StyledAnimatedDiv>
                   ))
    )
}