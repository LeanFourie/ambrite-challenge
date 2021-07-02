// Project Imports
import React, { useState } from 'react'

// Page
function HomeValidations( props ) {
    return (
        <section className="section section--check-validation">
            <div className="validation">
                {/* Geo */}
                <div className="validation__item validation__item--geo">
                    <div className="item__text">
                        <h2 className="text__element text__element--title">
                            Geo data validation
                        </h2>
                        <p className="text__element text__element--paragraph">
                            Check if the geo data set is valid.
                        </p>
                    </div>
                    <div className="item__actions">
                        <button
                            onClick={ () => props.checkIfEndpointsAreValid('geo.json') }
                            className="actions__item"
                        >
                            Test
                        </button>
                    </div>
                    { ( props.geo && props.geo.geoIsChecked ) &&
                        <div className={`
                            item__validity
                            item__validity--${ props.geo.geoIsValid }
                        `}>
                            <p className="validity__element">
                                { props.geo.geoIsValid ? 'Dataset is valid' : 'Dataset is invalid' }
                            </p>
                        </div>
                    }
                </div>
                {/* ./Geo */}

                {/* Countries */}
                <div className="validation__item validation__item--geo">
                    <div className="item__text">
                        <h2 className="text__element text__element--title">
                            Countries data validation
                        </h2>
                        <p className="text__element text__element--paragraph">
                            Check if the countries data set is valid.
                        </p>
                    </div>
                    <div className="item__actions">
                        <button
                            onClick={ () => props.checkIfEndpointsAreValid('data.json') }
                            className="actions__item"
                        >
                            Test
                        </button>
                    </div>
                    { ( props.countries && props.countries.countriesIsChecked ) &&
                        <div className={`
                            item__validity
                            item__validity--${ props.countries.countriesIsValid }
                        `}>
                            <p className="validity__element">
                                { props.countries.countriesIsValid ? 'Dataset is valid' : 'Dataset is invalid' }
                            </p>
                        </div>
                    }
                </div>
                {/* ./Countries */}
            </div>
        </section>
    )
}

export default HomeValidations
