
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarSvg } from '../../images/calendar.svg'
import { formatDateToWord } from "helpers/formatDate";
import { useRef } from "react";
import DatePicker from "react-datepicker";
import { StyledSpan } from "./DatePickerTask.styled";
import { useSelector } from "react-redux";
  const customStyles = {
  calendarContainer: (provided) => ({
    ...provided,
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    backgroundColor: 'red',
  }),
};
  
export const DatePickerTask = ({ value, dataFunc }) => {
    const formatted = (formatDateToWord(value.selectDate ?? new Date()))
    const datepickerRef = useRef();
const cardType = useSelector(state => state.cards.cardType);
  const openDatepicker = () => {
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };
    return (
        <div className='datepicker-div'>
            <StyledSpan $cardtype={cardType} className='date-span' onClick={openDatepicker}>{formatted}</StyledSpan>
        <DatePicker
         
                customStyles={customStyles}
                ref={datepickerRef}
                customInput={<CalendarSvg className='calendar-svg'/>}
            selected={value.selectDate ?? new Date()}
            onChange={dataFunc}
            timeFormat="HH:mm"
            dateFormat="yyyy/MM/dd HH:mm"
            showTimeSelect
        />
        </div>
     
    )
}