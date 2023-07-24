const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a26f42c71msh3f6dd6bf066b65ep137f81jsndf55e4bba1d3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));





   