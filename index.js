const weatherButton = document.querySelector("#get-weather");
const input = document.querySelector("#city-input");
const locationS=document.querySelector("#location")
const TempS=document.querySelector("#temperature")
const condS=document.querySelector("#condition")



const myApi = "0ea0b75e5e86446db88164849242110";


const query = "Jammu,India";
const url = `http://api.weatherapi.com/v1/current.json?key=${myApi}&q=${encodeURIComponent(query)}`;

// fetch(url)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//   console.log(data)
// })

async function data(value) {
  const weatherData = await fetch(value);
  const weatherValue = await weatherData.json();
  const {
    location,
    current: { condition },
    current,
  } = weatherValue;
  let weatherReportName = location.name;
  let weatherRegion = location.region;
  let weatherCountry = location.country;
  let displaytext = condition.text;
  let temperature = current.temp_c;

  // console.log(
  //   weatherReportName,
  //   weatherRegion,
  //   weatherCountry,
  //   displaytext,
  //   temperature
  // );
  locationS.innerText=`${weatherReportName},${weatherCountry}`
  TempS.innerText=`Temperature : ${temperature}°C`
  condS.innerText=`Condition :- ${displaytext}`
}

weatherButton.addEventListener("click", () => {
  let city = input.value;
  if(city){
    const url = `http://api.weatherapi.com/v1/current.json?key=${myApi}&q=${encodeURIComponent(city)}`;
   data(url);
  }
  input.value=""
});


data(url) // Called to make the url works