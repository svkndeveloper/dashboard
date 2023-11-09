import { StyledPlusSvg, StyledAddTaskButton } from "./AddTaskButton.styled";

export const AddTaskButton = ({onClick}) => {

    return (
        <StyledAddTaskButton type="button" onClick={onClick}>
            <StyledPlusSvg/>
        </StyledAddTaskButton>
    )
}