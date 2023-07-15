import { getCountryByName } from "../api";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchError from '../components/FetchError';

function CountryShowPage() {
	const { countryName } = useParams();
	const [loading, setLoading] = useState(true);
	const [countryData, setCountryData] = useState(null);
	const [fetchError, setFetchError] = useState(null);

	useEffect(() => {
		setLoading(true)
		getCountryByName(countryName)
			.then(data => {
				setCountryData(data);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setFetchError(err);
				setLoading(false);
			})
	}, [countryName]);

	if (loading) {
		return <div>Loading...</div>;
	} else if (fetchError) {
		return <FetchError error={fetchError}></FetchError>;
	} else {
		return <div>{countryData.name.common}</div>;
	}
}

export default CountryShowPage;