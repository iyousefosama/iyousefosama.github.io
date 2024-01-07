const Birth = [1, 19] // MM-DD

// Function to calculate the time remaining until the next birthday
function calculateTimeUntilBirthday() {
  const today = new Date();
  const birthdate = new Date(today.getFullYear(), Birth[0] - 1, Birth[1]);

  if (today.getTime() > birthdate.getTime()) {
    birthdate.setFullYear(birthdate.getFullYear() + 1);
  }

  const timeDiff = birthdate.getTime() - today.getTime();
  const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minsLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const secsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { daysLeft, hoursLeft, minsLeft, secsLeft };
}

// Function to update the countdown timer every second
function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  const timeLeft = calculateTimeUntilBirthday();

  countdownElement.innerHTML = `Time until next birthday: ${timeLeft.daysLeft} days, ${timeLeft.hoursLeft} hours, ${timeLeft.minsLeft} minutes, ${timeLeft.secsLeft} seconds`;
}

function isBirthday() {
  const today = new Date();
  const birthdate = new Date(today.getFullYear(), Birth[0] - 1, Birth[1]); // January 19th (month is zero-based)

  return (
    today.getMonth() === birthdate.getMonth() &&
    today.getDate() === birthdate.getDate()
  );
}

// Function to calculate the age
function calculateAge() {
  const today = new Date();
  const birthdate = new Date(2007, Birth[0] - 1, Birth[1]); // January 19th (month is zero-based)
  const birth = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

  let age = today.getFullYear() - birthdate.getFullYear();
 
  // If the birthdate hasn't been reached this year, adjust the age
  if (
    today <
    birth
  ) {
    age--;
  }

  return  isBirthday() ? "🥳🎉" + " " + age : age;
}

function updateAge() {
  const ageElement = document.getElementById("age");
  const age = calculateAge();

  ageElement.innerHTML = `I'm ${age} years old`;
}

updateAge();
setInterval(updateAge, 24 * 60 * 60 * 1000); // Update every day

// Update the countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
