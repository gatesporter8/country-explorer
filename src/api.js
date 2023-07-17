import axios from 'axios';

const api = axios.create({
	baseURL: 'https://restcountries.com/v3.1'
})

export const getCountries = async () => {
	const response = await api.get('/all');

	return response.data;
};

export const getCountryByName = async (country) => {
	let response;
	if (country.length === 3) { // if it is a country code
		response = await api.get(`/alpha/${country}`);
	} else { // if it is a full country name
		response = await api.get(`/name/${country}`);
	}

	return response.data[0];
};