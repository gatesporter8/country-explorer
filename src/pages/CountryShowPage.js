import { getCountryByName } from "../api";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryShow() {
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
	}, []); // rewatch the section of the React tutorial that talks about this error in useEffect tomorrow!

	return <div>Country Show</div>;
}

export default CountryShow;