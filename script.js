const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

// Function to format time in HH:MM:SS format
function formatTime(timeInMilliseconds) {
  const hours = Math.floor(timeInMilliseconds / 3600000);
  const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start button click handler
startBtn.addEventListener('click', () => {
  startTime = Date.now() - elapsedTime; // Get starting time based on elapsed time
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime; // Update elapsed time
    display.textContent = formatTime(elapsedTime);
  }, 1000); // Update display every second

  startBtn.disabled = true; // Disable start button
  stopBtn.disabled = false; // Enable stop button
  resetBtn.disabled = false; // Enable reset button
});

// Stop button click handler
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId); // Clear interval to stop timer
  intervalId = null;

  startBtn.disabled = false; // Enable start button
  stopBtn.disabled = true; // Disable stop button
});

// Reset button click handler
resetBtn.addEventListener('click', () => {
  clearInterval(intervalId); // Clear interval if running
  intervalId = null;
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);

  startBtn.disabled = false; // Enable start button
  stopBtn.disabled = true; // Disable stop button (since time is reset)
  resetBtn.disabled = true; // Disable reset button (since time is reset)
});
