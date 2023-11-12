import { StyledOverlay, StyledModal,StyledCancelButton,StyledDeleteButton,StyledQuestion,StyledButtonBlock, StyledInfoBlock } from "./ModalDelete.styled"
import { StyledLineVertSvg } from "components/FormAddTask/FormAddTask.styled";
import { useDispatch } from "react-redux";
import { deleteCardThunk } from "redux/cards/operations";

export const ModalDelete = ({handleCloseModal, _id,actions}) => {
    const dispatch = useDispatch();
  
    return (
        <StyledOverlay onClick={handleCloseModal}>
            <StyledModal onClick={(e) => e.stopPropagation()}>
                <StyledInfoBlock>
                     <StyledQuestion>Delete this Quest?</StyledQuestion>
                    <StyledButtonBlock>
                        <StyledCancelButton type='button'  onClick={handleCloseModal}>cancel</StyledCancelButton>
                        <StyledLineVertSvg/>
                        <StyledDeleteButton onClick={() => {
                            if (actions){actions()}
                             dispatch(deleteCardThunk(_id))
                            //  dispatch(getCardsThunk())
                        }
                        }>delete</StyledDeleteButton>
                    </StyledButtonBlock>
                </StyledInfoBlock>
                               
            </StyledModal>
        </StyledOverlay>
    )
}