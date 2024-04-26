const temp = document.querySelector(".temprature")
const img = document.querySelector(".images")
const climate = document.querySelector(".climate")
const date = document.querySelector(".date")
const wind = document.querySelector(".wind")
const hum  = document.querySelector(".humidity")
const pri = document.querySelector(".pri")


axios(
  'https://api.weatherapi.com/v1/current.json?key=5d30f3fc4ac141018e7173631242604&q=Karachi'
).then((r) => {
  console.log(r.data);
  temp.innerHTML = ` <h1>${r.data.current.temp_c}<sup>°</sup></h1>`
  img.innerHTML = ` <img src=${r.data.current.condition.icon} /> `
  climate.innerHTML = `<p>${r.data.current.condition.text}</p>`
  date.innerHTML = `<p>${r.data.location.localtime}</p>`
  wind.innerHTML = `<p>${r.data.current.wind_kph}<span>wind</span></p>`   
  hum.innerHTML = `<p>${r.data.current.humidity}<span>Humidity</span></p>  `
  pri.innerHTML = `<p>${r.data.current.precip_in}% <span>Precipitation</span></p>`
}); 
