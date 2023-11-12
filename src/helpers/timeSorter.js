export function compareTime(a, b) {
  var timePartsA = a.time.split(':');
  var timePartsB = b.time.split(':');
  
  var timeA = parseInt(timePartsA[0], 10) * 60 + parseInt(timePartsA[1], 10);
  var timeB = parseInt(timePartsB[0], 10) * 60 + parseInt(timePartsB[1], 10);

  return timeA - timeB;
}