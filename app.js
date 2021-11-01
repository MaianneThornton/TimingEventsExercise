// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
  const div1 = document.querySelector(`#first`);
  const p1 = document.createElement(`p`);
  p1.innerText = `Hi`;
  div1.append(p1);
}, 1000);

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
  const div2 = document.querySelector(`#timeout-nesting`);
  const p2 = document.createElement(`p`);
  p2.innerText = `One`;
  div2.append(p2);
  // Function runs four seconds after the page loads (One second after the `Example 3 Element` is displayed (AKA After the parent function runs))
  setTimeout(() => {
    const p3 = document.createElement(`p`);
    p3.innerText = `Two`;
    div2.append(p3); 
  }, 1000);
}, 2000);

// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let time = 1;
const timer = setInterval(() => {
  console.log(time);
  time++;
}, 1000);

// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
const stop = document.querySelector(`button`);
// Stops/Clears the "full" and "half" setInterval methods when the "STOP" button is clicked
stop.addEventListener(`click`, () => {
clearInterval(timer);
});



