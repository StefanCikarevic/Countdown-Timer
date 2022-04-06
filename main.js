const newYear = "1 Jan 2023";
const daysDom = document.getElementById("days");
const hoursDom = document.getElementById("hours");
const minutesDom = document.getElementById("mins");
const secondsDom = document.getElementById("seconds");

console.log(days);

function countDown() {

  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  var delta = Math.abs(newYearDate - currentDate) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60; // in theory the modulus is not required

  console.log(`${days} ${hours} ${minutes} ${seconds}`);

  daysDom.innerHTML = days;
  hoursDom.innerHTML = hours;
  minutesDom.innerHTML = minutes;
  secondsDom.innerHTML = Math.round(seconds);
}
countDown();
