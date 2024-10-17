// Строка короче 20 символов
const stringFirst = 'Двадцать';
if (stringFirst.length < 20) {
  console.log ('true');
}
else {
  console.log ('false');
}

// Длина строки не более 6 символов
const stringSecond = 'Вторая';
if (stringSecond.length <= 6) {
  console.log ('true');
}
else {
  console.log ('false');
}

// Строка длиннее 10 символов
const stringThird = 'Третья';
if (stringThird.length > 10) {
  console.log ('true');
}
else {
  console.log ('false');
}

// Функция для проверки, является ли строка палиндромом.
const palindrome = str => {
  str = str.toLowerCase();
  return str === str.split('').reverce().join('');
}
const str = 'level';
const isPalindrome = palindrome(str);
console.log (isPalindrome);

// Функция подсчета времени

const parseTime = (time) => {
  const [hours, min] = time.split(':');
  return parseInt(hours, 10) * 60 + parseInt(min, 10);
};

const timeFrame = (startWorkingDay, endWorkingDay, startMeeting, durationMeeting) => {
  const startDayMin = parseTime(startWorkingDay);
  const endDayMin = parseTime(endWorkingDay);
  const startMeetingMin = parseTime(startMeeting);
  const meetingEndMin = startMeetingMin + durationMeeting;
  return startMeetingMin >= startDayMin
    && startMeetingMin <= endDayMin
    && meetingEndMin >= startDayMin
    && meetingEndMin <= endDayMin;
};

console.log (timeFrame('8:0', '10:0', '8:0', 120)); // true
console.log (timeFrame('8:00', '17:30', '08:00', 900)); // false
