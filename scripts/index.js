const labelElement = document.getElementById("party");
const countdownElement = document.getElementById("counter");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

//Utility for ISO formating
const formatBirthday = (year) => {
  return `${year}-12-22T00:00:00.000Z`;
};

let year = new Date().getFullYear();
let birthday = formatBirthday(year);

//Utility for time formating
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const countdown = () => {
  const currentDate = new Date();
  let targetDate = new Date(birthday);
  let remainingTime = targetDate - currentDate;

  //Reset year if birthday passed and check if party time
  if (remainingTime <= 0) {
    if (currentDate.getDay() === targetDate.getDay()) {
      labelElement.innerHTML = "Party time!";
      countdownElement.style.display = "none";

      return;
    } else {
      year++;
      birthday = formatBirthday(year);
      targetDate = new Date(birthday);
      remainingTime = targetDate - currentDate;
      labelElement.innerHTML = "We party in";
      countdownElement.style.display = "flex";
    }
  }

  //Total remaining time in seconds;
  const totalSeconds = Math.floor(remainingTime / 1000);

  //Get remaining days
  const days = Math.floor(totalSeconds / 3600 / 24);
  //Get remaining hours
  const minutes = Math.floor((totalSeconds / 60) % 60);
  //Get remaining minutes
  const hours = Math.floor((totalSeconds / 3600) % 24);
  //Get remaining seconds
  const seconds = Math.floor(totalSeconds % 60);

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
};

//Initial countdown
countdown();

//Call countdown every second
setInterval(countdown, 1000);
