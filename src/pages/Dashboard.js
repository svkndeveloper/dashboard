import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";

export const Dashboard = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>My dashboard</h1>
            <button type="button" onClick={()=>dispatch(logOut())}>Log Out</button>
        </div>
    )
}