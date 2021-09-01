document.getElementById('spinner').style.display = 'none';

function getInput() {
    const inputField = document.getElementById('input');
    const city = inputField.value;
    inputField.value = '';

    // spinner & data toggle
    document.getElementById('spinner').style.display = 'block';
    document.getElementById('div-container').style.display = 'none';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09bfa4a52687cba23fc3fb8904104e42`)
        .then(res => res.json())
        .then(data => displaySearchReasult(data))
}
const displaySearchReasult = data => {
    const divContainer = document.getElementById('div-container');
    divContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('weather-status', 'text-white', 'text-center');

    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h1>${data.name}, ${data.sys.country}</h1>
        <h3><span>${(data.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].description}</h1>
    `;
    divContainer.appendChild(div);

    // spinner & data toggle
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('div-container').style.display = 'block';
}

