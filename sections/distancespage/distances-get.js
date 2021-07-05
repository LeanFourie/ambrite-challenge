// Project Imports
import React, { useState } from 'react'

// Snippets
import SnippetButton from './../../snippets/snippet-button'
import SnippetInput from './../../snippets/snippet-input'

// Page
function DistancesGet( props ) {
    // Page
    return (
        <section className="section section--get-entries">
            <div className="text">
                <h2 className="text__element text__element--title">
                    Get closest locations
                </h2>
                <p className="text__element text__element--paragraph">
                    Get the closests locations to the enetered latitude and longitude.
                </p>
            </div>

            <div className="actions">
                <div className="actions__item actions__item--lat">
                    <SnippetInput
                        settings={{
                            classes: 'item__element',
                            isRequired: true
                        }}
                        label={{
                            value: 'Latitude'
                        }}
                        input={{
                            type: 'number',
                            value: props.lat,
                            placeholder: `e.g. 47.4923372`,
                            setComponentValue: (e) => props.setLat(e.target.value)
                        }}
                        error={{
                            hasError: props.lat === '' ? true : false,
                            message: 'Please add a latitude'
                        }}
                    />
                </div>
                <div className="actions__item actions__item--long">
                    <SnippetInput
                        settings={{
                            classes: 'item__element',
                            isRequired: true
                        }}
                        label={{
                            value: 'Latitude'
                        }}
                        input={{
                            type: 'number',
                            value: props.long,
                            placeholder: `e.g. -122.2923814`,
                            setComponentValue: (e) => props.setLong(e.target.value)
                        }}
                        error={{
                            hasError: props.long === '' ? true : false,
                            message: 'Please add a longitude'
                        }}
                    />
                </div>
                <div className="actions__item actions__item--submit">
                    <SnippetButton
                        label={
                            props.hasData
                                ? 'Reset'
                                : 'Find locations'
                        }
                        click={
                            props.hasData
                                ? props.resetValues
                                : props.getClosestStatesFromLocation
                        }
                        classes={`
                            button--white
                            ${ props.lat === '' || props.long === '' ? 'button--disabled' : '' }
                        `}
                    />
                </div>
            </div>
        </section>
    )
}

export default DistancesGet
