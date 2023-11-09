import { logOut } from "redux/auth/operations";
import { useSelector, useDispatch } from "react-redux";
import { AddTaskButton } from "components/AddTaskButton/AddTaskButton";
// import { useState } from "react";
import { useEffect } from "react";
import { ModalNewTask } from "components/ModalNewTask/ModalNewTask";
import { pickCardType } from "redux/cards/cardsSlice";
import { getCardsThunk } from "redux/cards/operations";
export const Dashboard = () => {
    // const [showModal, setShowModal] = useState(false);
    const { cards } = useSelector(state => state.cards.cards)
    console.log(cards)
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getCardsThunk()) 
    },[dispatch])
    return (
        <div>
            <h1>My dashboard</h1>
            <button type="button" onClick={()=>dispatch(logOut())}>Log Out</button>
            <AddTaskButton type='button' onClick={() => {
                console.log('click')
                // setShowModal(!showModal)
                dispatch(pickCardType('Task'))
            }} />
          <ModalNewTask />
        </div>
    )
}