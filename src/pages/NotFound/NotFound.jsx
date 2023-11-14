import { StyledNotFoundDiv, StyledErrorBlock, StyledNavLink,StyledErrorSvg } from "./NotFound.styled";
import { refreshError } from "redux/auth/slice";
import { useDispatch, useSelector } from "react-redux";

export default function NotFound() {
    const dispatch = useDispatch();
    const authError = useSelector(state=>state.auth.authError)

    return (
        <StyledNotFoundDiv>
            <StyledErrorBlock>
                <StyledErrorSvg/>
                <h1 className='title'>Authorization Error</h1>
                {authError === 'loginError'
                    ?
                    <StyledNavLink to='/login' onClick={()=>dispatch(refreshError())}>Try login again</StyledNavLink>
                    :
                    <StyledNavLink to='/register' onClick={()=>dispatch(refreshError())}>Try register again</StyledNavLink>}
            </StyledErrorBlock>
           
            
        </StyledNotFoundDiv>
    )
}