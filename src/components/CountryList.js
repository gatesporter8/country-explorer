import { useState, useEffect } from 'react';
import getCountries from "../api";
import CountryCard from './CountryCard';
import FetchError from './FetchError';
import { CountryContainer, PageContainer } from './styles/CountryListStyles';

function CountryList() {
	const [loading, setLoading] = useState(true);
	const [countryData, setCountryData] = useState([]);
	const [fetchError, setFetchError] = useState(null);

	const alphabetize = (a, b) => {
		let nameA = a.name.common.toUpperCase();
		let nameB = b.name.common.toUpperCase();

		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	}

	// pull the country data at the beginning of every page load
	useEffect(() => {
		setLoading(true)
		getCountries()
			.then(data => {
				setCountryData(data.sort(alphabetize));
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setFetchError(err);
				setLoading(false);
			})
	}, []);

	const generateKey = (country) => {
		return country.name.common
	}

	const handleCardClick = () => {

	}

	if (loading) {
		return <div>Loading...</div>;
	} else if (fetchError) {
		return <FetchError error={fetchError}></FetchError>;
	} else {
		return (
			<PageContainer>
				<h1>COUNTRY EXPLORER</h1>
				<CountryContainer>
					{countryData.map((country) => (
						<CountryCard key={generateKey(country)} country={country} onClick={() => handleCardClick}></CountryCard>
					))}
				</CountryContainer>
			</PageContainer>
		);
	}

	// right now your countries list is showing up properly. the style looks a bit lame, but its showing up.
	// TODO: make the countries show page, make each individual country link to its own countries show page. may need routing.
	// we have determined that we will need to fetch the country data again, or use context/a state managment libary. Since this project is small, lets just fetch again, using 
	// the search by name endpoint in the rest countries api.

}

export default CountryList;