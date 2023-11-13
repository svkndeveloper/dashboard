import { StyledOverlay, StyledModal } from './ModalNewTask.styled';
import { FormAddTask } from 'components/FormAddTask/FormAddTask';
import { useSelector } from 'react-redux';

export const ModalNewTask = ({handleCloseModal}) => {
const cardType = useSelector(state => state.cards.cardType);
  return (
    <StyledOverlay>
      <StyledModal $cardtype={cardType}>
        <FormAddTask handleCloseModal={handleCloseModal} />
      </StyledModal>
    </StyledOverlay>
  );
};
