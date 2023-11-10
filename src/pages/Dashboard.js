import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { AddTaskButton } from "components/AddTaskButton/AddTaskButton";
import { useState } from "react";

import { ModalNewTask } from "components/ModalNewTask/ModalNewTask";
import { pickCardType } from "redux/cards/cardsSlice";

import { CardList } from "components/CardsList/CardList";
export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false)
    }
  const dispatch = useDispatch();
    return (
        <div>
            <h1>My dashboard</h1>
            {showModal && <ModalNewTask handleCloseModal={handleCloseModal} />}
            <CardList/>
            <button type="button" onClick={()=>dispatch(logOut())}>Log Out</button>
            <AddTaskButton type='button' onClick={() => {
                setShowModal(true)
                dispatch(pickCardType('Task'))
            }} />
          
        </div>
    )
}