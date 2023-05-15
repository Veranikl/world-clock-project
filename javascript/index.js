function showTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyoData = moment().tz("Asia/Tokyo");
    tokyoDate.innerHTML = tokyoData.format("MMMM D, YYYY");
    tokyoTime.innerHTML = tokyoData.format("h:mm:ss [<small>]A[</small>]");
  }

  //Warsaw
  let warsawElement = document.querySelector("#warsaw");
  if (warsawElement) {
    let warsawDate = warsawElement.querySelector(".date");
    let warsawTime = warsawElement.querySelector(".time");
    let warsawData = moment().tz("Europe/Warsaw");
    warsawDate.innerHTML = warsawData.format("MMMM D, YYYY");
    warsawTime.innerHTML = warsawData.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCities(event) {
  let cityInfo = event.target.value;
  let cityNameChanged = cityInfo.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityInfo);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityNameChanged}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

showTime();
setInterval(showTime, 1000);

let selectedCity = document.querySelector("#menu");
selectedCity.addEventListener("change", updateCities);
