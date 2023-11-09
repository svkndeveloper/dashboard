import { Formik, Field } from 'formik';
import { SelectLevel } from 'components/ReactSelect/SelectLevel';
import { SelectType } from 'components/ReactSelect/SelectType';
import { StyledForm } from './FormAddTask.styled';
import { DatePickerTask } from 'components/DatePicker/DatePickerTask';
import { useDispatch, useSelector } from 'react-redux';
import { addCardThunk } from 'redux/cards/operations';
const levelDefault = 'Normal';
const typeDefault = 'Stuff';

export const FormAddTask = () => {
  const cardType = useSelector(state => state.cards.cardType);
  const dispatch = useDispatch();
  // const cards = useSelector(state => state.cards.cards) 
  console.log(cardType)
    const handleSubmit = (values, { resetForm } )=> {
        
                if (!values.selectDate) {
            return alert('оберіть дату');
          }
 const year = values.selectDate.getFullYear();
const month = String(values.selectDate.getMonth() + 1).padStart(2, '0'); 
const day = String(values.selectDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = values.selectDate.toLocaleString('uk-UA', {
  hour: '2-digit',
  minute: '2-digit',
        });
      const { taskInput, selectLevel,selectType } = values;
      const newCard = {
        title: taskInput,
        difficulty: selectLevel,
        category: selectType,
        date: formattedDate,
        time: formattedTime,
        type: 'Task'
      }
   
      dispatch(addCardThunk(newCard))
      resetForm();
    };
    return(
     <Formik
          onSubmit={handleSubmit}
          initialValues={{
              selectLevel: levelDefault,
              selectType: typeDefault,
              taskInput: '',
              selectDate: null,
            }}
     
        >
          {({ values, setFieldValue }) => (
            <StyledForm>
              <Field className='select-level' name="selectLevel">
                {({ field }) => (
                  <SelectLevel
                                {...field}
                                
                    currentValue={values.selectLevel}
                    dataFunc={option =>
                      setFieldValue('selectLevel', option.value)
                    }
                  />
                )}
              </Field>
 <Field name="selectType">
                {({ field }) => (
                  <SelectType
                    {...field}
                    currentValue={values.selectType}
                    dataFunc={option =>
                      setFieldValue('selectType', option.value)
                    }
                  />
                )}
                    </Field>
                     <div className='addtask-name-block'>
                    <label className='task-label' htmlFor="taskInput">Create New Quest</label>
                    <Field type="text" name="taskInput" id="taskInput" required/>
                    </div>
                     <Field name="selectDate">
                {({ field }) => (
                  <DatePickerTask
                                {...field}
                    value={values}
                                dataFunc={(date) => setFieldValue('selectDate', date)}
                               
                  />
                )}
                    </Field>
              <button type="submit">Submit</button>
            </StyledForm>
          )}
        </Formik>
        )
}