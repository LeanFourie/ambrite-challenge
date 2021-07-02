// Project Imports
import React, { useState } from 'react'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import DistancesList from './../sections/distancespage/distances-list'

// Page
function Distances( props ) {
    // States
    const [dataList, setDataList] = useState( [] )

    // Functions
    const getClosestStatesFromLocation = async ( lat, long ) => {
        // Get geo from static file ( Cross-origin blocked the API call from local )
        let geo = await require(`../data/geo.json`)

        // Set a tolerance to reduce the amount of data to work with
        let tolerance = 0.01

        // Filter data to get only entries that match the requirements
        geo = geo.filter(( item ) => {
            return (
                ( Math.hypot(item.geo.split(',')[0]) - lat ) < tolerance
                    && (Math.hypot(item.geo.split(',')[1]) - Math.abs(long) ) < tolerance
            )
        }).sort(( a, b ) => {
            // Sort the data form closest to furthest
            return (
                a.geo.split(',')[0] - b.geo.split(',')[0] && a.geo.split(',')[1] - b.geo.split(',')[1]
            )
        }).slice(0, 10) // Return only the first 10 items

        let validIPV4Values = []
        for ( let entry of geo ) {
            validIPV4Values.push( entry.ipv4 )
        }

        // Get data from static file ( Cross-origin blocked the API call from local )
        let data = await require(`../data/data.json`)

        // Filter data to get relevant entries
        let dataFiltered = []
        for ( let entry of validIPV4Values ) {
            let validEntry = data.find(item => item.meta.includes(entry))
            dataFiltered.push(validEntry)
        }
        data = dataFiltered

        // Set data list as a state to render results
        setDataList(data)
    }

    // Page
    return (
        <DefaultTheme
            page={{
                title: 'Distances',
                identifier: 'Distances Page'
            }}
        >
            {/* Get entries */}
            <section className="section section--get-entries">

            </section>
            {/* ./Get entries */}

            {/* List of entries */}
            { dataList.length > 0 &&
                <DistancesList
                    dataList={ dataList }
                />
            }
            {/* ./List of entries */}
            <button onClick={() => { getClosestStatesFromLocation(47.4923372, -122.2923814) }}>Test</button>
        </DefaultTheme>
    )
}

export default Distances
