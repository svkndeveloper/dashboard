
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarSvg } from '../../images/calendar.svg'
import { formatDateToWord } from "helpers/formatDate";

export const DatePickerTask = ({ value, dataFunc }) => {
    const formatted = (formatDateToWord(value.selectDate ?? new Date()))
    console.log(formatted)
 
    return (
        <div>
            <span>{formatted}</span>
               <DatePicker
            customInput={<CalendarSvg />}
            selected={value.selectDate ?? new Date()}
            onChange={dataFunc}
            timeFormat="HH:mm"
            dateFormat="yyyy/MM/dd HH:mm"
            showTimeSelect
        />
        </div>
     
    )
}