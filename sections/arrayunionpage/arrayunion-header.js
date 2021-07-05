// Project Imports
import React, { useState } from 'react'

// Snippets
import SnippetButton from './../../snippets/snippet-button'

// Page
function ArrayUnionHeader( props ) {
    return (
        <section className="section section--header">
            <div className="text">
                <h2 className="text__element text__element--title">
                    Merge two arrays
                </h2>
                <p className="text__element text__element--paragraph">
                    Merge the two below arrays into one unique array with unique objects.
                </p>
            </div>

            <div className="actions">
                <SnippetButton
                    label="View arrays"
                    icon={{
                        name: 'icon-eye',
                        position: 'left'
                    }}
                    link={{
                        route: 'https://ambrite.ch/challenge/p3Data.json',
                        target: '_blank'
                    }}
                    classes="actions__item button--white"
                />
                <SnippetButton
                    label="Merge arrays"
                    icon={{
                        name: 'icon-unite',
                        position: 'left'
                    }}
                    click={ props.mergeArrays }
                    classes="actions__item button--white"
                />
            </div>
        </section>
    )
}

export default ArrayUnionHeader
