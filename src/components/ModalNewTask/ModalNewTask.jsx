import { StyledOverlay, StyledModal } from './ModalNewTask.styled';
import { FormAddTask } from 'components/FormAddTask/FormAddTask';

export const ModalNewTask = () => {

  return (
    <StyledOverlay>
      <StyledModal>
        <FormAddTask/>
      </StyledModal>
    </StyledOverlay>
  );
};
