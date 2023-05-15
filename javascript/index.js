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
  //Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDate = vancouverElement.querySelector(".date");
    let vancouverTime = vancouverElement.querySelector(".time");
    let vancouverData = moment().tz("America/Vancouver");
    vancouverDate.innerHTML = vancouverData.format("MMMM D, YYYY");
    vancouverTime.innerHTML = vancouverData.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    //Sao Paulo
    let saopauloElement = document.querySelector("#sao-paulo");
    if (saopauloElement) {
      let saopauloDate = saopauloElement.querySelector(".date");
      let saopauloTime = saopauloElement.querySelector(".time");
      let saopauloData = moment().tz("America/Sao_Paulo");
      saopauloDate.innerHTML = saopauloData.format("MMMM D, YYYY");
      saopauloTime.innerHTML = saopauloData.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
}

function updateCities(event) {
  let cityInfo = event.target.value;
  if (cityInfo === "current") {
    cityInfo = moment.tz.guess();
  }
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
        </div>
         <br />
          <a class="backMenu" href="index.html">All cities ⤴️</a>
        `;

  setTimeout(() => {
    updateCities(event);
  }, 1000);
}

showTime();
setInterval(showTime, 1000);

let selectedCity = document.querySelector("#menu");
selectedCity.addEventListener("change", updateCities);
