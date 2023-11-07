import { register } from "redux/auth/operations";
import { useDispatch } from "react-redux";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
   
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
           
        dispatch(register({
        email: form.elements.email.value,
        password: form.elements.password.value
    }))
        form.reset();
}

    return (
        <form onSubmit={handleSubmit}>
           <label>
                <input name='name' type='text' />
            </label>
             <label>
                <input name='email' type='text' />
            </label>
             <label>
                <input name='password' type='text' />
            </label>
            <button type="submit">GO!</button>
        </form>
    )
}