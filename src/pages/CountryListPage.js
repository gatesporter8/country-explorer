import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getCountries } from "../api";
import CountryCard from '../components/CountryCard';
import FetchError from '../components/FetchError';
import { CountryContainer, PageContainer } from './styles/CountryListPageStyles';

const COUNTRY_ROUTE = '/countries';

function CountryListPage() {
	const [loading, setLoading] = useState(true);
	const [countriesData, setCountriesData] = useState([]);
	const [fetchError, setFetchError] = useState(null);

	const navigate = useNavigate();

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
				setCountriesData(data.sort(alphabetize));
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

	const handleCardClick = (countryName) => {
		console.log("clicked country card for " + countryName)
		navigate(COUNTRY_ROUTE + "/" + countryName)
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
					{countriesData.map((country) => (
						<CountryCard key={generateKey(country)} country={country} onDoubleClick={() => handleCardClick(country.name.common)}></CountryCard>
					))}
				</CountryContainer>
			</PageContainer>
		);
	}
}

export default CountryListPage;

// TODO - Now you should work pulling a particular piece of country data into the CountryShowPage component