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
                            Geo validation
                        </h2>
                        <p className="text__element text__element--paragraph">
                            Check if the geo dataset is valid.
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

                {/* Data */}
                <div className="validation__item validation__item--geo">
                    <div className="item__text">
                        <h2 className="text__element text__element--title">
                            Data validation
                        </h2>
                        <p className="text__element text__element--paragraph">
                            Check if the states dataset is valid.
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
                    { ( props.data && props.data.dataIsChecked ) &&
                        <div className={`
                            item__validity
                            item__validity--${ props.data.dataIsValid }
                        `}>
                            <p className="validity__element">
                                { props.data.dataIsValid ? 'Dataset is valid' : 'Dataset is invalid' }
                            </p>
                        </div>
                    }
                </div>
                {/* ./Data */}
            </div>
        </section>
    )
}

export default HomeValidations
