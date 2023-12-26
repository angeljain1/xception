import React from "react";

import clock from "../assets/clock.svg";

import "./timer.css";

const Timer = () => {
  var countDownDate = new Date("April 7, 2023 00:00:01").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    if (document.getElementById("timer")) {
      document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Xception is Live!";
    }
  }, 1000);

  return (
    <>
      <div className="timer-container">
        <img src={clock} className="clock" />
        <div id="timer" className="timer"></div>
      </div>
    </>
  );
};

export default Timer;
