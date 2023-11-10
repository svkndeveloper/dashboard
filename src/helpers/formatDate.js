export function formatDateToWord(date) {
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

const hour1 = String(selectedDate.getHours()).padStart(2, '0');
minutes1 = String(selectedDate.getMinutes()).padStart(2, '0');

const formattedTime = `${hour1}:${minutes1}`;

  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `Today, ${formattedTime}`;
  }

  currentDate.setDate(currentDate.getDate() + 1); 
  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `Tomorrow, ${formattedTime}`;
  }

  currentDate.setDate(currentDate.getDate() - 2); 
  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `Yesterdey, ${formattedTime}`;
  }
const year = selectedDate.getFullYear();
const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
const day = String(selectedDate.getDate()).padStart(2, '0');
const hour = String(selectedDate.getHours()).padStart(2, '0');
const minutes = String(selectedDate.getMinutes()).padStart(2, '0');

return `${year}-${month}-${day}, ${hour}:${minutes}`;
}


