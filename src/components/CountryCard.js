import { Card, Flag } from './styles/CountryCardStyles';

function CountryCard({ country }) {
	return(
		<Card>
			<Flag src={country.flags.svg} alt={`${country.name.common}'s flag`}  />
			<h2>{country.name.common}</h2>
			<p>Population: {country.population}</p>
			<p>Region: {country.region}</p>
		</Card>
	)
}

export default CountryCard;


// what information do you want displayed on the CountryCard?
// Name: country.name.common
// Flag: country.flag
// Population: country.population
// Region: country.region