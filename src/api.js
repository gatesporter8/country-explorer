import axios from 'axios';

const api = axios.create({
	baseURL: 'https://restcountries.com/v3.1'
})

export const getCountries = async () => {
	const response = await api.get('/all');

	return response.data;
};

export const getCountryByName = async (countryName) => {
	const response = await api.get(`/name/${countryName}`);

	return response.data;
};