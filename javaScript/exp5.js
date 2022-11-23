var lTime = new Date("NOV 23 2022 17:30:00").getTime();
var lHour = new Date("NOV 23 2022 17:30:00").getHours();
var lMinute = new Date("NOV 23 2022 17:30:00").getMinutes();
var lSeconds = new Date("NOV 23 2022 17:30:00").getSeconds();

var myfunc = setInterval(() => {
  var currDate = new Date();
  var currTime = currDate.getTime();
  var currHour = currDate.getHours();
  var currMinute = currDate.getMinutes();
  var currSeconds = currDate.getSeconds();

  let timeleft = lTime - currTime;
  let hourLeft = lHour - currHour;
  let MinuteLeft = lMinute - currMinute;
  let secondLeft = lSeconds - currSeconds;

  document.getElementById(
    "res"
  ).innerHTML = `Hours: ${hourLeft}  Minutes: ${Math.abs(
    MinuteLeft
  )} second: ${Math.abs(secondLeft)}`;
}, 1000);
