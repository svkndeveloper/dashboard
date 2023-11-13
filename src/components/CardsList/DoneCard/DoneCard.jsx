import { StyledLi, StyledAwardSvg , StyledTitle} from "./DoneCard.styled"
import { getDifficultyColor, getCategoryBackgroundColor } from "helpers/hooks";
import { formatJustDateToWord } from "helpers/formatJustDate";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useState } from "react";
import { animated , useTransition} from 'react-spring';
export const DoneCard = ({ card }) => {
    const { _id, title, difficulty, time, date, category, type } = card;
    const [showModal, setShowModal] = useState(false);
    const [award, setAward] = useState(false);
    
  const colorDiff = getDifficultyColor(difficulty)
    const categoryBackgroundColor = getCategoryBackgroundColor(category);
    
    const handleCloseModal = () => {
        setShowModal(false);
       
    }
  const transitions = useTransition(award, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)'},
      leave: { opacity: 0, transform: 'scale(0)' },
    config: { duration: 500 },
 
    delay: 150,
  })

    return (<>
        <StyledLi $cardtype={type}
            onClick={() => {
            if (showModal) return;
            setShowModal(true)
        }}>
           {!award ?<><span className='difficulty' ><span className='circle' style={{ backgroundColor: colorDiff }}></span>{difficulty}</span>
                    <span className='category' style={{ backgroundColor: categoryBackgroundColor }}>{category}</span>
            <div className='infoblock'>
                {type === 'Challenge' && <p className="challenge-text">Challenge</p>}
              <StyledTitle $cardtype={type}>{title}</StyledTitle>
                <p className='date-time'>{`${formatJustDateToWord(date)}, ${time}`}</p>
            </div></> 
           : transitions(
                (styles, item) =>
                    item && (
                        <animated.div style={styles}>
                           <StyledAwardSvg $award={award} />
                           </animated.div>
                   ))}
            
            {showModal && <ModalDelete  handleCloseModal={handleCloseModal} _id={_id} />} 
        </StyledLi>
        <button type='button' onClick={()=>setAward(!award)}>change</button></>
    )
}