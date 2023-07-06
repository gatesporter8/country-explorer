import { Card, Flag } from './styles/CountryCardStyles';

function CountryCard({ country, onDoubleClick}) {
	return(
		<Card onDoubleClick={onDoubleClick}>
			<Flag src={country.flags.svg} alt={`${country.name.common}'s flag`}  />
			<h2>{country.name.common}</h2>
			<p>Population: {country.population}</p>
			<p>Region: {country.region}</p>
		</Card>
	)
}

export default CountryCard;