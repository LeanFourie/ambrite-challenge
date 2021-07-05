// Project Imports
import React, { useState } from 'react'

// Helpers
import { fetchDataFromAPI } from './../helpers/dataManagement'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import ArrayUnionHeader from './../sections/arrayunionpage/arrayunion-header'
import ArrayUnionResults from './../sections/arrayunionpage/arrayunion-results'

// Page
function ArrayUnion( props ) {
    // States
    const [dataList, setDataList] = useState( [] )

    // Functions
    // This creates unique objects from the selected array
    const createUniqueValues = ( array ) => {
        // Merge objects with the same name
        var result = array.filter(function(value) {
            return (
                this[value.name]
                    ? !Object.assign(this[value.name], value)
                    : ( this[value.name] = value )
            )
        }, {})

        // Remove objects with no values
        for ( let entry of result ) {
            if ( Object.keys(entry).length <= 1 ) {
                let entryIndex = result.indexOf(entry)
                result.splice(entryIndex, 1)
            }
        }

        // Return result
        return result
    }

    // This merges the two arrays into one
    const mergeArrays = ( array1, array2 ) => {
        // Return unique results for arrays
        let resultFromArray1 = createUniqueValues(array1),
            resultFromArray2 = createUniqueValues(array2)

        // Merge the two arrays into one unique array
        let combinedUniqueArrays = createUniqueValues(resultFromArray1.concat(resultFromArray2))

        // Set the list state equal to the final unique array
        setDataList(combinedUniqueArrays)

        console.log(combinedUniqueArrays)
    }

    // Page
    return (
        <DefaultTheme
            page={{
                title: 'Array Union',
                identifier: 'Array Union Page'
            }}
        >
            {/* Header */}
            <ArrayUnionHeader
                mergeArrays={ () => mergeArrays(props.data.testSet1, props.data.testSet2) }
            />
            {/* ./Header */}

            {/* Results */}
            { dataList.length > 0 &&
                <ArrayUnionResults
                    results={ dataList }
                />
            }
            {/* ./Results */}
        </DefaultTheme>
    )
}

// Fetch data
export async function getStaticProps() {
    // Fetch from API
    let data = await fetchDataFromAPI('p3Data.json')

    // Return the fetched data
    return {
        props: {
            data: data
        }
    }
}

export default ArrayUnion
