import { StyledOverlay, StyledModal } from './ModalNewTask.styled';
import { FormAddTask } from 'components/FormAddTask/FormAddTask';

export const ModalNewTask = ({handleCloseModal}) => {

  return (
    <StyledOverlay>
      <StyledModal>
        <FormAddTask handleCloseModal={handleCloseModal} />
      </StyledModal>
    </StyledOverlay>
  );
};
