import { Header, Title, FlagImage } from './styles/CountryDetailStyles';
import CountryDetailsDataTable from './CountryDetailsDataTable'

function CountryDetails({ countryData }) {
	debugger

	return (
		<div>
			<Header><Title>{countryData.name.common}</Title></Header>
			<section>
            	<FlagImage src={countryData.flags.svg} alt={`Flag of ${countryData.name.common}`} />
       		</section>
			<CountryDetailsDataTable countryData={countryData}/>
		</div>
	)
}

export default CountryDetails;

