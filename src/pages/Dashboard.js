import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { AddTaskButton } from "components/AddTaskButton/AddTaskButton";
import { useState,useEffect } from "react";
import { ModalNewTask } from "components/ModalNewTask/ModalNewTask";
import { pickCardType } from "redux/cards/cardsSlice";
import { CardList } from "components/CardsList/CardList";
import { animated, useTransition } from 'react-spring';
import { StyledMainDiv,StyledHeader,StyledContainer,StyledHeaderContainer,StyledLogoutSvg, StyledChallengeButton } from "./Dashboard.styled";
import { useSelector } from "react-redux";
import { useNarrowScreen } from "helpers/hooks";

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useSelector(state => state.auth.currentUser);
  // const userEmail = useSelector(state => state.auth.isLoggedIn);
  const cards = useSelector(state => state.cards.cards);
  const doneCards = useSelector(state => state.cards.doneCards);
  const firstLetter = currentUser.charAt(0);
  const isNarrowScreen = useNarrowScreen();
  const transformedUser = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
  
   useEffect(() => {
    if (cards.length > 0 || doneCards.length > 0) return;
    setShowModal(true)
  },[cards.length, doneCards.length])
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const dispatch = useDispatch();
    
    const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: {
      opacity: 1,
      transform: 'translateX(0)',
      transition: 'all 150ms',
    },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    delay: 250,
  })
  return (
    transitions(
      (styles, item) =>
        item && (
         
          <div>
            <StyledHeader>
              <StyledHeaderContainer>
                <p className='title'>Quesify</p>
                <p className='first-letter'>{firstLetter}</p>
                {isNarrowScreen && <p className='fullname-text'>{`${transformedUser}'s Quest Log`}</p>}
                <StyledChallengeButton/>
                                  <StyledLogoutSvg onClick={() => dispatch(logOut())}/>
                                              </StyledHeaderContainer>
            </StyledHeader>
            
            <StyledMainDiv>
             <StyledContainer>
                <animated.div style={{ ...styles, width: '100%', overflowX: '', minHeight: '90vh' }}>
                  <CardList>
                    {showModal && <ModalNewTask handleCloseModal={handleCloseModal} />}
            </CardList>
            </animated.div>
            
            <AddTaskButton type='button' onClick={() => {
                setShowModal(true)
                dispatch(pickCardType('Task'))
              }} />
                <div className='div-for-btn'></div>
                </StyledContainer>
            </StyledMainDiv>
         </div>
            
            
         ))
    )
}