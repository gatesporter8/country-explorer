import { StyledTable, StyledTd, StyledTh, StyledTableImg } from './styles/CountryDetailsDataTableStyles';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function CountryDetailsDataTable({ countryData }) {
	const parseCurrency = (currencyObject) => {
		const currencies = Object.values(currencyObject).map((nameObject) => {
			return nameObject.name;
		})

		return currencies.join(', ')
	};

	const parseNeighboringCountries = (borders) => {
		const neighboringCountryLinks = borders.map((border, index, array) => (
			<Fragment key={border}>
				<Link to={`/countries/${border}`}>{border}</Link>
				{index < array.length - 1 && ', '}
			</Fragment>
		))

		return neighboringCountryLinks
	}

	return (
		<StyledTable>
      		<tbody>
        		<tr>
					<StyledTh>Official Name</StyledTh>
         		    <StyledTd>{countryData.name.official}</StyledTd>
        		</tr>
        		<tr>
          			<StyledTh>Population</StyledTh>
          			<StyledTd>{countryData.population}</StyledTd>
        		</tr>
        		<tr>
          			<StyledTh>Area</StyledTh>
          			<StyledTd>{countryData.area} km<sup>2</sup></StyledTd>
       			 </tr>
        		<tr>
          			<StyledTh>Capital</StyledTh>
          			<StyledTd>{countryData.capital ? countryData.capital : 'None'}</StyledTd>
       		    </tr>
				<tr>
          			<StyledTh>Languages Spoken</StyledTh>
          			<StyledTd>{countryData.languages ? Object.values(countryData.languages).join(', ') : 'None'}</StyledTd>
				</tr>
				<tr>
          			<StyledTh>Currencies</StyledTh>
          			<StyledTd>{countryData.currencies ? parseCurrency(countryData.currencies) : 'None'}</StyledTd>
				</tr>
				<tr>
          			<StyledTh>Continent(s)</StyledTh>
          			<StyledTd>{countryData.continents.join(', ')}</StyledTd>
				</tr>
				<tr>
          			<StyledTh>Coat of Arms</StyledTh>
          			<StyledTd><StyledTableImg src={countryData.coatOfArms.svg} alt={`Coat of Arms of ${countryData.name.common}`}/></StyledTd>
				</tr>
				<tr>
          			<StyledTh>Neighboring Countries</StyledTh>
          			<StyledTd>{countryData.borders ? parseNeighboringCountries(countryData.borders) : 'None'}</StyledTd>
				</tr>
      		</tbody>
    	</StyledTable>
	)
}

export default CountryDetailsDataTable

// lets get the rest of this filled out, including the links., currencies, neighboring countries (links), 
// find the structure of the api reponse.
// 
