// Project Imports
import React, { useState } from 'react'

// Snippets
import SnippetButton from './../../snippets/snippet-button'
import SnippetCardContent from './../../snippets/snippet-card-content'

// Page
function HomeValidations( props ) {
    // States
    const [geoHover, setGeoHover] = useState( false )
    const [dataHover, setDataHover] = useState( false )

    return (
        <section className="section section--check-validation">
            <div className="validation">
                {/* Geo */}
                <SnippetCardContent
                    state={
                        !props.geo.geoIsChecked
                            ? ''
                            : props.geo.geoIsValid ? 'success' : 'danger'
                    }
                    hasHover={ geoHover }
                    classes="validation__item validation__item--geo"
                    title="Geo validation"
                >
                    <div className="item__inner">
                        <p className="inner__paragraph">
                            { ( props.geo && props.geo.dataIsChecked ) ?
                                <>
                                    { props.geo.geoIsValid ? 'Dataset is valid' : 'Dataset is invalid' }
                                </>
                                :
                                <>
                                    Check if the geo dataset is valid.
                                </>
                            }
                        </p>
                        <span
                            className="inner__action"
                            onMouseEnter={ () => setGeoHover(true) }
                            onMouseLeave={ () => setGeoHover(false) }
                        >
                            <SnippetButton
                                label={ !props.geo.geoIsChecked ? 'Check validation' : 'Reset' }
                                click={ () => props.checkIfEndpointsAreValid('geo.json') }
                                classes={`button--white ${ props.geo.geoIsChecked ? 'button--dark' : '' }`}
                            />
                        </span>
                    </div>
                </SnippetCardContent>
                {/* ./Geo */}

                {/* Data */}
                <SnippetCardContent
                    state={
                        !props.data.dataIsChecked
                            ? ''
                            : props.data.dataIsValid ? 'success' : 'danger'
                    }
                    hasHover={ dataHover }
                    classes="validation__item validation__item--data"
                    title="Data validation"
                >
                    <div className="item__inner">
                        <p className="inner__paragraph">
                            { ( props.data && props.data.dataIsChecked ) ?
                                <>
                                    { props.data.dataIsValid ? 'Dataset is valid' : 'Dataset is invalid' }
                                </>
                                :
                                <>
                                    Check if the states dataset is valid.
                                </>
                            }
                        </p>
                        <span
                            className="inner__action"
                            onMouseEnter={ () => setDataHover(true) }
                            onMouseLeave={ () => setDataHover(false) }
                        >
                            <SnippetButton
                                label={ !props.data.dataIsChecked ? 'Check validation' : 'Reset' }
                                click={ () => props.checkIfEndpointsAreValid('data.json') }
                                classes={`button--white ${ props.data.dataIsChecked ? 'button--dark' : '' }`}
                            />
                        </span>
                    </div>
                </SnippetCardContent>
                {/* ./Data */}
            </div>
        </section>
    )
}

export default HomeValidations
