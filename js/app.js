// ui interface element selection
const home_ul = document.getElementById('home-ui');
const city_name = document.getElementById('city-name')
const temperature = document.getElementById('temperature');
const w_define = document.getElementById('w-define');
const location_detail = document.getElementById('location-detail');
const fill = document.getElementById('fill');
const humidity_value = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const ui_change_btn = document.getElementById('ui-change-btn');
const reset_btn = document.getElementById('reset-btn');
const wrong_cityName = document.getElementById('wrong-cityName')

// search interface element select
const search_field = document.getElementById('search-field')
const searching_interface = document.getElementById('searching-interface');
const search_btn = document.getElementById('search-btn');


// fetch data for ui showing
fetch(`http://api.openweathermap.org/data/2.5/weather?id=${'1185098'}&units=metric&appid=${'b54f9cc99cbd3707fda0128009e1ca33'}`)
    .then(response => response.json())
    .then(data => {
        show_weather_result(data)
    })

// ui change btn 
ui_change_btn.addEventListener('click', () => {
    home_ul.style.display = 'none';
    searching_interface.style.display = 'block';
})
// reset btn
reset_btn.addEventListener('click', () => {
    location.reload()
})
// fetch data search_btn event listener
search_btn.addEventListener('click', () => {
    if (search_field.value == "") {
        alert('enter a valid city name')
    }
    else {
        const city_name = search_field.value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${'b54f9cc99cbd3707fda0128009e1ca33'}`)
            .then(Response => Response.json())
            .then(data => {
                show_weather_result(data)
            })
        home_ul.style.display = 'block';
        ui_change_btn.style.display = 'none';
        reset_btn.style.display = 'block';
        search_field.value = '';
    }
})

// parameter including function
const show_weather_result = (info) => {
    console.log(info)
    const { name } = info;
    const { temp, feels_like } = info.main;
    const { country } = info.sys;
    const { speed } = info.wind;
    const { main } = info.weather[0];

    city_name.innerHTML = `Location:${name}`
    temperature.innerHTML = `<i class="fas fa-temperature-high"></i>${Math.floor(temp)}&#xb0;C`;
    w_define.innerHTML = main;
    location_detail.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${name},${country}`
    fill.innerHTML = `<i class="fas fa-temperature-high"></i> ${Math.floor(temp)}&#xb0;c`;
    humidity_value.innerHTML = `<i class="fas fa-flask"></i> ${Math.floor(feels_like)}%`
    wind_speed.innerHTML = `<i class="fas fa-fan"></i> ${speed}`;
}
