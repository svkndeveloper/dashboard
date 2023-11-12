import { StyledLi } from "./Card.styled";
import { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import { StyledForm,StyledClearSvg ,StyledLineVertSvg } from "components/FormAddTask/FormAddTask.styled";
import { SelectLevel } from "components/ReactSelect/SelectLevel";
import { SelectType } from "components/ReactSelect/SelectType";
import { DatePickerTask } from "components/DatePicker/DatePickerTask";
import { changeEditStatus } from "redux/cards/cardsSlice";
import {useDispatch, useSelector} from 'react-redux'
import { editCardThunk, deleteCardThunk } from "redux/cards/operations";
import { StyledCheckSvg, StyledSaveSvg } from "./Card.styled";
import {formatJustDateToWord } from "helpers/formatJustDate";
import { ReactComponent as FireSvg } from '../../../images/fire.svg';

export const Card = ({ card, handleEditing, editId }) => {
    const {  _id, title, difficulty,time, date, category, type} = card;
    const [isEditing, setIsEditing] = useState(false);
     const [timeRemaining, setTimeRemaining] = useState(null);
    const editStatus = useSelector(state => state.cards.editStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (editId !== _id) {
        setIsEditing(false)
    }
},[_id, editId])
    let colorDiff;
    switch (difficulty) {
        case 'Easy':
            colorDiff = '#00D7FF';
            break;
        case 'Normal':
            colorDiff = '#24D40C';
            break; 
          case 'Hard':
            colorDiff = '#DB0837';
            break; 
        default:
            colorDiff = '#24D40C';
    }
      let categoryBackgroundColor
         switch (category) {
      case 'Stuff':
        categoryBackgroundColor = '#B9C3C8';
        break;
      case 'Family':
        categoryBackgroundColor = '#FFE6D3';
        break;
      case 'Leisure':
        categoryBackgroundColor = '#F8D2FF';
                 break;
              case 'Health':
        categoryBackgroundColor = '#CDF7FF';
                 break;
                 case 'Learning':
        categoryBackgroundColor = '#FFF6C0';
        break;
                case 'Work':
        categoryBackgroundColor = '#9AC2A5';
        break;
      default:
        categoryBackgroundColor = '#B9C3C8'; 
    }
    const handleSubmit = (values, {resetForm}) => {
        console.log(values.selectDate)
                 if (!values.selectDate) {
            return alert('оберіть дату');
          }
 const year = values.selectDate.getFullYear();
const month = String(values.selectDate.getMonth() + 1).padStart(2, '0'); 
const day = String(values.selectDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = values.selectDate.toLocaleTimeString('uk-UA', {
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
        type: type
      }
        dispatch(editCardThunk({ _id, newCard }));
       
    }

    
    useEffect(() => {
  const checkTimeAndSetRemaining = () => {
    const current_time = new Date();
    const [hours, minutes] = time.split(':').map(part => parseInt(part, 10));
    const currentDate = new Date(date);
    currentDate.setHours(hours, minutes, 0, 0);
    const time_difference = currentDate - current_time;
    const seconds_remaining = Math.floor(time_difference / 1000);
    if (seconds_remaining < 2 * 60 * 60) {
      setTimeRemaining(true);
    } else {
      setTimeRemaining(false);
    }
  };
  checkTimeAndSetRemaining();
  const intervalId = setInterval(checkTimeAndSetRemaining, 100000);
  return () => clearInterval(intervalId);
}, [date, time]);

    return (
        <StyledLi onClick={() => {
            if (editStatus && _id === editId) return;
            handleEditing(_id)
            setIsEditing(!isEditing)
            dispatch(changeEditStatus(true))
        }
        }>
            {!isEditing ?
                <>
                    <span className='difficulty' ><span className='circle' style={{ backgroundColor: colorDiff }}></span>{difficulty}</span>
                    <span className='category' style={{ backgroundColor: categoryBackgroundColor }}>{category}</span>
                    <div className='infoblock'>
                         <div>
    </div>
                        <p className='title'>{title}</p>
                        <p className='date-time'>{`${formatJustDateToWord(date)}, ${time}`} {timeRemaining !== null && timeRemaining ? <FireSvg/>: <></>}</p>
                        {/* <p className='date-time'>{`${date}, ${time}`}</p> */}
                    </div>
                </> :
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{
                        selectLevel: difficulty,
                        selectType: category,
                        taskInput: '',
                        selectDate: new Date(`${date}T${time}`),
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
                                <label className='task-label' htmlFor="taskInput">Edit Quest</label>
                                <Field type="text" name="taskInput" id="taskInput" required />
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
                            <div className='btns-block'>
                                 <button className='clear-button' type="submit"> <StyledSaveSvg /></button>
                                <StyledLineVertSvg />
                                <button className='clear-button' type='button' onClick={() => {
                                    dispatch(deleteCardThunk(_id))
                                                                 setIsEditing(false)
        dispatch(changeEditStatus(false))
                                }
                                }><StyledClearSvg /></button>
                                <StyledLineVertSvg />
                                <button className='clear-button' type='button' onClick={() => {
                                    setIsEditing(false)
        dispatch(changeEditStatus(false))
                                }}><StyledCheckSvg/></button>
                                                         </div>
              
                        </StyledForm>
                    )}
                </Formik>}
        </StyledLi>
    )
}