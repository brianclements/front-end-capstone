let date = new Date();
let currentDay= String(date.getDate()).padStart(2, '0');
let tomorrowDay= String(date.getDate()+1).padStart(2, '0');
let currentMonth = String(date.getMonth()+1).padStart(2,"0");
let currentYear = date.getFullYear();

export const today = () => {
  return `${currentYear}-${currentMonth}-${currentDay}`;
};

export const tomorrow = () => {
  return `${currentYear}-${currentMonth}-${tomorrowDay}`;
};
