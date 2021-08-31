document.getElementById('spinner').style.display = 'none';

function getInput() {
    const inputField = document.getElementById('input');
    const city = inputField.value;
    inputField.value = '';
    // document.getElementById('spinner').style.display = 'block';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09bfa4a52687cba23fc3fb8904104e42`)
        .then(res => res.json())
        .then(data => displaySearchReasult(data))
    // document.getElementById('spinner').style.display = 'none';
}

const displaySearchReasult = data => {
    const divContainer = document.getElementById('div-container');
    divContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('weather-status', 'text-white', 'text-center');

    const city = data.name;
    const temperature = (data.main.temp - 273.15).toFixed(2);
    const country = data.sys.country;
    const des = data.weather[0].description;
    const icon = data.weather[0].icon;

    console.log(data);
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
        <h1>${city}, ${country}</h1>
        <h3><span>${temperature}</span>&deg;C</h3>
        <h1 class="lead">${des}</h1>
    `;
    divContainer.appendChild(div);
}

