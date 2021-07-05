// Project Imports
import React from 'react'
import Link from 'next/link'

// Snippets
import SnippetCardContent from './../../snippets/snippet-card-content'

// Page
function HomeLinks( props ) {
    return (
        <section className="section section--links">
            <div className="links">
                {/* Validity checks */}
                <Link href="/validity-checks">
                    <a className="links__item">
                        <SnippetCardContent
                            state="info"
                            hasHover={ true }
                            icon="icon-check"
                            title="Validity checks"
                            paragraph="Write a function that performs some validity checks on two JSON files, geo.json and data.json. The page must display whether or not the given files/input are valid."
                        />
                    </a>
                </Link>
                {/* ./Validity checks */}
                {/* Distance checks */}
                <Link href="/distances">
                    <a className="links__item">
                        <SnippetCardContent
                            state="support"
                            hasHover={ true }
                            icon="icon-pin-globe"
                            title="Distance checks"
                            paragraph="Write a function that takes in latitude and longitude as parameters, and returns a sorted list of the 10 rows from data.json with the shortest distance from the latitude and longitude, in a nicely formatted table."
                        />
                    </a>
                </Link>
                {/* ./Distance checks */}
                {/* Array union */}
                <Link href="/array-union">
                    <a className="links__item">
                        <SnippetCardContent
                            state="success"
                            hasHover={ true }
                            icon="icon-unite"
                            title="Array union"
                            paragraph="Write a function that takes two arrays of objects as parameters, and returns a single array containing the union of the two arrays. The input object can be found in p3Data.json. The union is defined as follows"
                        />
                    </a>
                </Link>
                {/* ./Array union */}
            </div>
        </section>
    )
}

export default HomeLinks
