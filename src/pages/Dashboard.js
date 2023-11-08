import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { AddTaskButton } from "components/AddTaskButton/AddTaskButton";
// import { useState } from "react";
import { ModalNewTask } from "components/ModalNewTask/ModalNewTask";
export const Dashboard = () => {
    // const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>My dashboard</h1>
            <button type="button" onClick={()=>dispatch(logOut())}>Log Out</button>
            <AddTaskButton />
            <ModalNewTask/>
        </div>
    )
}