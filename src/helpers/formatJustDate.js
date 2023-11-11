export function formatJustDateToWord(date) {
  const currentDate = new Date();
    const selectedDate = new Date(date);
    let minutes1 = selectedDate.getMinutes();
const roundedMinutes = Math.ceil(minutes1 / 30) * 30;

if (roundedMinutes >= 60) {
  selectedDate.setHours(selectedDate.getHours() + 1);
  selectedDate.setMinutes(0);
} else {
  selectedDate.setMinutes(roundedMinutes);
}


minutes1 = String(selectedDate.getMinutes()).padStart(2, '0');



  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `Today`;
  }

  currentDate.setDate(currentDate.getDate() + 1); 
  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `Tomorrow`;
  }

  currentDate.setDate(currentDate.getDate() - 2); 
  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `Yesterdey`;
  }
const year = selectedDate.getFullYear();
const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
const day = String(selectedDate.getDate()).padStart(2, '0');


return `${year}-${month}-${day}`;
}


