import { StyledLi } from "./Card.styled";
import { formatDateToWord } from "helpers/formatDate";
import { useState } from "react";
import { Formik, Field } from "formik";
import { StyledForm,StyledClearSvg ,StyledLineVertSvg } from "components/FormAddTask/FormAddTask.styled";
import { SelectLevel } from "components/ReactSelect/SelectLevel";
import { SelectType } from "components/ReactSelect/SelectType";
import { DatePickerTask } from "components/DatePicker/DatePickerTask";


export const Card = ({ card }) => {
    const {  title, difficulty,time, date, category} = card;
    const [isEditing, setIsEditing] = useState(true);

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
    const handleSubmit = values => {
    console.log(values)
}
    return (
        <StyledLi onClick={()=>setIsEditing(!isEditing)}>
            {!isEditing ?
                <>
                    <span className='difficulty' ><span className='circle' style={{ backgroundColor: colorDiff }}></span>{difficulty}</span>
                    <span className='category' style={{ backgroundColor: categoryBackgroundColor }}>{category}</span>
                    <div className='infoblock'>
                        <p className='title'>{title}</p>
                        <p className='date-time'>{formatDateToWord(date)}</p>
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
                                <button className='clear-button' type='button'><StyledClearSvg /></button>
                                <StyledLineVertSvg />
                                <button className='start-button' type="submit">START</button>
                            </div>
              
                        </StyledForm>
                    )}
                </Formik>}
        </StyledLi>
    )
}