// Project Imports
import React, { useState } from 'react'

// Helpers
import { accordion } from './../../helpers/helpers'

// Page
function ArrayUnionResults( props ) {
    // Page
    return (
        <section className="section section--results">
            <div className="results">
                { props.results.map(( item, index ) => {
                    return (
                        <div
                            key={ index }
                            className="results__item"
                        >
                            <div className="item__title">
                                <h4
                                    className="title__element"
                                    onClick={ ( e ) => {
                                        accordion( e, '.results', '.results__item' )
                                    }}
                                >
                                    { item.name }
                                </h4>
                            </div>
                            <div className="item__body">
                                <div className="body__inner">
                                    { Object.keys(item).map((entry, i) => {
                                        return (
                                            <>
                                                { entry !== 'name' &&
                                                    <div
                                                        key={ i }
                                                        className="inner__item"
                                                    >
                                                        <p className="item__col item__col--key">
                                                            { entry }
                                                        </p>
                                                        <p className="item__col item__col--value">
                                                            { Object.values(item)[i] }
                                                        </p>
                                                    </div>
                                                }
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ArrayUnionResults
