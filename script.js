// const weatherTemp = document.querySelector(".weather_temp");
// const location = document.querySelector(".location");
// const wind = document.getElementById("wind_value");
// const humidity = document.getElementById("humidity_value");
// const feelsLike = document.getElementById("feels_like_value");

const weather = {
	apikey: "04f1bb004f9171d290163e6756d7c3a2",
	getWeather(city) {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" +
				city +
				"&units=metric&appid=" +
				this.apikey
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
	},

	displayWeather(data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, feels_like, humidity } = data.main;
		const { speed } = data.wind;
		// console.log(name, description, temp, humidity, speed, feels_like, icon);
		document.querySelector(".location").innerHTML = name;
		document.querySelector(".weather_temp").innerHTML = `${Math.round(temp)}°C`;
		document.getElementById("wind_value").innerHTML = `${Math.round(
			speed
		)}km/h`;
		document.getElementById("humidity_value").innerHTML = `${Math.round(
			humidity
		)}%`;
		document.getElementById("feels_like_value").innerText = `${Math.round(
			feels_like
		)}°C`;

		document.querySelector(".weather_description").innerHTML = description;

		if (icon == "01d") {
			document.querySelector(
				".weather_image img"
			).src = `./images/clear-sky.svg`;
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #4b88cc, #c6e1ff)";
		} else if (icon == "01n") {
			document.querySelector(
				".weather_image img"
			).src = `./images/clear-sky-night.svg`;
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #265A8D, #5CA9FF)";
		} else if (icon == "02d") {
			document.querySelector(
				".weather_image img"
			).src = `./images/few-clouds.svg`;
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #4b88cc, #c6e1ff)";
		} else if (icon == "02n") {
			document.querySelector(
				".weather_image img"
			).src = `./images/few-clouds-night.svg`;
		} else if (icon == "03d" || icon == "03n") {
			document.querySelector(
				".weather_image img"
			).src = `./images/scattered-clouds.svg`;
		} else if (icon == "04d" || icon == "04n") {
			document.querySelector(
				".weather_image img"
			).src = `./images/broken-clouds.svg`;
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #4b88cc, #c6e1ff)";
		} else if (icon == "09d" || icon == "09n") {
			document.querySelector(
				".weather_image img"
			).src = `./images/shower-rain.svg`;

			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #265A8D, #5CA9FF)";

			// window.getComputedStyle(
			// 	document.querySelector(".container"),
			// 	"::before"
			// ).background = "linear-gradient(180deg, #33669F, #4D8ACD)";
		} else if (icon == "10d") {
			document.querySelector(".weather_image img").src = `./images/rain.svg`;

			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #265A8D, #5CA9FF)";

			// window.getComputedStyle(
			// 	document.querySelector(".container"),
			// 	"::before"
			// ).background = "linear-gradient(180deg, #33669F, #4D8ACD)";
		} else if (icon == "10n") {
			document.querySelector(
				".weather_image img"
			).src = `./images/rain-night.svg`;

			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #265A8D, #5CA9FF)";

			// window.getComputedStyle(
			// 	document.querySelector(".container"),
			// 	"::before"
			// ).background = "linear-gradient(180deg, #33669F, #4D8ACD)";
		} else if (icon == "11d" || icon == "11n") {
			document.querySelector(".weather_image img").src = `./images/stormy.svg`;
			//#1F4163,#3B7EC3
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #1F4163, #3B7EC3)";
		} else if (icon == "13d" || icon == "13n") {
			document.querySelector(".weather_image img").src = `./images/snowing.svg`;
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #1F4163, #3B7EC3)";
		} else if (icon == "50d" || icon == "50n") {
			document.querySelector(".weather_image img").src = `./images/mist.svg`;
		} else {
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #4b88cc, #c6e1ff)";

			// window.getComputedStyle(
			// 	document.querySelector(".container"),
			// 	"::before"
			// ).background = "linear-gradient(180deg, #4e85d6, #65a9f7)";
		}

		if (icon == "03n" || icon == "04n") {
			document.querySelector(".container").style.background =
				"linear-gradient(180deg, #265A8D, #5CA9FF)";
		}
	},
	search() {
		this.getWeather(document.querySelector(".search_bar").value);
	},
};

document.querySelector(".search_btn").addEventListener("click", () => {
	weather.search();
});

document.querySelector(".search_bar").addEventListener("keyup", (e) => {
	if (e.key == "Enter") {
		weather.search();
	}
});

// weather.getWeather("Accra");
