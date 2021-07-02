// Project Imports
import React, { useState } from 'react'

// Helpers
import { fetchDataFromAPI } from './../helpers/dataManagement'
import { jsonValidityCheck } from './../helpers/helpers'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import HomeValidations from './../sections/homepage/home-validations'

// Page
function Home( props ) {
    // States
    const [geoIsChecked, setGeo] = useState( false )
    const [geoIsValid, setGeoValidation] = useState( false )
    const [countriesIsChecked, setCountries] = useState( false )
    const [countriesIsValid, setCountryValidation] = useState( false )

    // Functions
    const checkIfEndpointsAreValid = async ( endpoint ) => {
        // Get data from static file ( Cross-origin blocked the API call from local )
        let data = ( endpoint !== null ) ? await require(`../data/${ endpoint }`) : null,
            isValidData = jsonValidityCheck(data)

        if ( endpoint.includes('geo') ) {
            setGeo(!geoIsChecked)
            setGeoValidation(isValidData)
        } else {
            setCountries(!countriesIsChecked)
            setCountryValidation(isValidData)
        }
    }

    return (
        <DefaultTheme
            page={{
                title: 'Home Page',
                identifier: 'Home Page'
            }}
        >
            {/* Validation Checks */}
            <HomeValidations
                geo={{
                    geoIsChecked: geoIsChecked,
                    geoIsValid: geoIsValid
                }}
                countries={{
                    countriesIsChecked: countriesIsChecked,
                    countriesIsValid: countriesIsValid
                }}
                checkIfEndpointsAreValid={ ( endpoint ) => checkIfEndpointsAreValid( endpoint ) }
            />
            {/* ./Validation Checks */}
        </DefaultTheme>
    )
}

// Fetch data
export async function getStaticProps() {
    // Fetch from API
    let geoData = await fetchDataFromAPI('geo.json')
    let countryData = await fetchDataFromAPI('data.json')

    let isValidData = ( jsonValidityCheck(geoData) && jsonValidityCheck(countryData) )
                        ? true
                        : false

    // Return the fetched data
    return {
        props: {
            geoData: geoData,
            countryData: countryData,
            hasValidData: isValidData
        }
    }
}

export default Home
