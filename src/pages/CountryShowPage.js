import { getCountryByName } from "../api";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchError from '../components/FetchError';
import CountryDetails from '../components/CountryDetails';

function CountryShowPage() {
	const { country } = useParams();
	const [loading, setLoading] = useState(true);
	const [countryData, setCountryData] = useState(null);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		setLoading(true)
		getCountryByName(country)
			.then(data => {
				setCountryData(data);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setFetchError(err);
				setLoading(false);
			})
	}, [country]);

	if (loading) {
		return <div>Loading...</div>;
	} else if (fetchError) {
		return <FetchError error={fetchError}></FetchError>;
	} else {
		return <CountryDetails countryData={countryData}/>;
	}
}

export default CountryShowPage;