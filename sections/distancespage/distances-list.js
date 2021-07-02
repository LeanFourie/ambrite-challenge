// Project Imports
import React from 'react'

// Page
function DistancesList( props ) {
    return (
        <section className="section section--list-entries">
            <div className="list">
                { props.dataList.map(( item, index ) => {
                    return (
                        <div
                            key={ index }
                            className="list__item"
                        >
                            { item.meta }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default DistancesList
