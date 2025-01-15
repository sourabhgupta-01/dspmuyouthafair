

// Set the target date and time (e.g., December 31, 2024, 23:59:59)
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  const distance = countdownDate - now;
  
  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the respective elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    alert("Countdown finished!");
  }
}, 1000);








