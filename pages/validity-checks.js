// Project Imports
import React, { useState } from 'react'

// Helpers
import { jsonValidityCheck } from './../helpers/helpers'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import ValidityChecksValidations from './../sections/validitypage/validity-checks-validations'

// Page
function ValidityChecks( props ) {
    // States
    const [geoIsChecked, setGeo] = useState( false )
    const [geoIsValid, setGeoValidation] = useState( false )
    const [dataIsChecked, setData] = useState( false )
    const [dataIsValid, setDataValidation] = useState( false )

    // Functions
    const checkIfEndpointsAreValid = async ( endpoint, set, check ) => {
        // Get data from static file ( Cross-origin blocked the API call from local )
        let data = ( endpoint !== null ) ? await require(`../data/${ endpoint }`) : null,
            isValidData = jsonValidityCheck(data)

        if ( endpoint.includes('geo') ) {
            setGeo(!geoIsChecked)
            setGeoValidation(isValidData)
        } else {
            setData(!dataIsChecked)
            setDataValidation(isValidData)
        }
    }

    return (
        <DefaultTheme
            page={{
                title: 'Validity Checks',
                identifier: 'Validity Page'
            }}
        >
            {/* Validation Checks */}
            <ValidityChecksValidations
                geo={{
                    geoIsChecked: geoIsChecked,
                    geoIsValid: geoIsValid,
                    setGeo: setGeo,
                    setGeoValidation: setGeoValidation
                }}
                data={{
                    dataIsChecked: dataIsChecked,
                    dataIsValid: dataIsValid
                }}
                checkIfEndpointsAreValid={ ( endpoint ) => checkIfEndpointsAreValid( endpoint ) }
            />
            {/* ./Validation Checks */}
        </DefaultTheme>
    )
}

export default ValidityChecks
