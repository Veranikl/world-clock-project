function showTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoData = moment().tz("Asia/Tokyo");
  tokyoDate.innerHTML = tokyoData.format("MMMM D, YYYY");
  tokyoTime.innerHTML = tokyoData.format("h:mm:ss [<small>]A[</small>]");

  //Warsaw
  let warsawElement = document.querySelector("#warsaw");
  let warsawDate = warsawElement.querySelector(".date");
  let warsawTime = warsawElement.querySelector(".time");
  let warsawData = moment().tz("Europe/Warsaw");
  warsawDate.innerHTML = warsawData.format("MMMM D, YYYY");
  warsawTime.innerHTML = warsawData.format("h:mm:ss [<small>]A[</small>]");
}

showTime();
setInterval(showTime, 1000);
