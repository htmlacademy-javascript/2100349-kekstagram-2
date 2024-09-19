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
