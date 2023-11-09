export function formatDateToWord(date) {
  const currentDate = new Date();
  const selectedDate = new Date(date);
  
  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return 'сьогодні';
  }

  currentDate.setDate(currentDate.getDate() + 1); 
  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return 'завтра';
  }

  currentDate.setDate(currentDate.getDate() - 2); 
  if (
    selectedDate.getDate() === currentDate.getDate() &&
    selectedDate.getMonth() === currentDate.getMonth() &&
    selectedDate.getFullYear() === currentDate.getFullYear()
  ) {
    return 'вчора';
  }

  return date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
}


