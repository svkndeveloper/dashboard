import { StyledLi } from "./Card.styled";
import { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import { StyledForm, StyledClearSvg, StyledLineVertSvg, StyledStarSvg } from "components/FormAddTask/FormAddTask.styled";
import { SelectLevel } from "components/ReactSelect/SelectLevel";
import { SelectType } from "components/ReactSelect/SelectType";
import { DatePickerTask } from "components/DatePicker/DatePickerTask";
import { changeEditStatus } from "redux/cards/cardsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { editCardThunk, deleteCardThunk,completeCardThunk } from "redux/cards/operations";
import { StyledCheckSvg, StyledSaveSvg ,StyledStarSvgBlue} from "./Card.styled";
import {formatJustDateToWord } from "helpers/formatJustDate";
import { ReactComponent as FireSvg } from '../../../images/fire.svg';
import { useTimeRemaining, useCheckOvertime, getDifficultyColor, getCategoryBackgroundColor } from "helpers/hooks";
export const Card = ({ card, handleEditing, editId }) => {
    const {  _id, title, difficulty,time, date, category, type} = card;
  const [isEditing, setIsEditing] = useState(false);
  const [starHovered, setStarHovered] = useState(false);
     const editStatus = useSelector(state => state.cards.editStatus);
    const dispatch = useDispatch();
  const timeRemaining = useTimeRemaining(date, time);
  const overtimed = useCheckOvertime(date, time);

   useEffect(() => {
        if (editId !== _id) {
        setIsEditing(false)
    }
   }, [_id, editId])
  
      const colorDiff = getDifficultyColor(difficulty)
   const categoryBackgroundColor = getCategoryBackgroundColor(category);
  
    const handleSubmit = (values) => {
        
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
   

    return (
        <StyledLi
            $overtimed={overtimed.toString()}
        onClick={() => {
          if (overtimed) {
                  return dispatch(deleteCardThunk(_id))
                }
              if (editStatus && _id === editId) return;
              if (starHovered) return;
            handleEditing(_id)
            setIsEditing(!isEditing)
            dispatch(changeEditStatus(true))
        }
        }>
            {!isEditing ?
          <>
            <StyledStarSvgBlue
              onMouseEnter={() => setStarHovered(true)}
               onMouseLeave={()=>setStarHovered(false)}
              onClick={() => dispatch(completeCardThunk(_id))} />
                    <span className='difficulty' ><span className='circle' style={{ backgroundColor: colorDiff }}></span>{difficulty}</span>
                    <span className='category' style={{ backgroundColor: categoryBackgroundColor }}>{category}</span>
            <div className='infoblock'>
              <div>
              
    </div>
              <p className='title'>{title}</p>
                        <p className={`date-time ${overtimed ? 'overtimed-date-time' : ''}`}>{overtimed ? 'Failed' : `${formatJustDateToWord(date)}, ${time}`} {timeRemaining !== null && timeRemaining ? <FireSvg/>: <></>}</p>
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
              <StyledStarSvg/>
                        </StyledForm>
                    )}
                </Formik>}
        </StyledLi>
    )
}