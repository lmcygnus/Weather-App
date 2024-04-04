/* eslint-disable no-console */
import './style.css';

const processData = (data) => {
  const city = document.querySelector('.city');
  city.textContent = `${data.location.name}, ${data.location.country}`;

  const text = document.querySelector('.text');
  text.textContent = data.current.condition.text;

  const temp = document.querySelector('.temperature');
  temp.textContent = `${data.current.temp_c}°C`;

  const feelsLike = document.querySelector('.feelsLike');
  feelsLike.textContent = `Feels like ${data.current.feelslike_c}°C`;

  const humidity = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${data.current.humidity}%`;

  const uv = document.querySelector('.uv');
  uv.textContent = `UV : ${data.current.uv}`;
};

async function getData(city) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8275e63a9594405ea5d194015242503&q=${city}`);
    if (!response.ok) {
      throw new Error('No se pudo obtener los datos del servidor');
    }
    const data = await response.json();
    console.log(data);
    processData(data);
  } catch (err) {
    const inf = document.querySelector('.inf');
    inf.textContent = 'Location does not exist';
    console.log(err);
  }
}

const searchLocation = async () => {
  const location = document.querySelector('input').value;
  getData(location);
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchLocation();
  document.querySelector('.inf').style.display = 'block';
  form.reset();
});
