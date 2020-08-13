
/* Runs the Script once index.html is loaded */

$(document).ready(); {

/* Calls the Clock function */

  drawCounter();

/* Sets up Date.now */

  const date = Date.now();
  var reset = 0;

/* Draws our Timer */

  function drawCounter() {
    setInterval(() => {

/* Creates our variables */
      var resetTime = Date.now() - date;
      var timeNow = Date.now() - date;
      var minutes = Math.floor(timeNow/1000/60).toString();
      var seconds = Math.floor(timeNow/1000).toString();
      var milliseconds = timeNow.toString();
      
// Checks if clock adds extra "0" based on place value

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (milliseconds < 10) {
        milliseconds = "00" + milliseconds;
      }

      if (milliseconds < 100) {
        millseconds = "0" + milliseconds;
      }

// Check if clock resets to "0" based on number of milliseconds


/*if (minutes = 60) {
  minutes = resetTime
}

if (seconds = 60) {
  seconds = resetTime;
} */

if (milliseconds > 1000) {
  millseconds -= resetTime;
}

// Sends all the information to the index.html

$("#flight-time").html("FLIGHT TIME: " + minutes + ":" + seconds + "." + milliseconds);
   }, 1);

  };

};