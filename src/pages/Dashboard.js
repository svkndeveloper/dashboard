import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { AddTaskButton } from "components/AddTaskButton/AddTaskButton";
import { useState } from "react";
import { ModalNewTask } from "components/ModalNewTask/ModalNewTask";
import { pickCardType } from "redux/cards/cardsSlice";
import { CardList } from "components/CardsList/CardList";
import { animated, useTransition } from 'react-spring';
import { StyledMainDiv,StyledHeader,StyledContainer,StyledHeaderContainer } from "./Dashboard.styled";

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
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
              </StyledHeaderContainer>
              
            </StyledHeader>
            <StyledMainDiv>
             <StyledContainer>
                                      <h1>My dashboard</h1>
            {showModal && <ModalNewTask handleCloseModal={handleCloseModal} />}
                <animated.div style={{ ...styles, overflowX: 'hidden' }}>
            <CardList/>
            </animated.div>
            <button type="button" onClick={()=>dispatch(logOut())}>Log Out</button>
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