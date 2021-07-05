// Project Imports
import React from 'react'

// Page
function DistancesList( props ) {
    return (
        <section className="section section--list-entries">
            {/* Header */}
            <div className="header">
                {/* ID */}
                <div className="header__item">
                    <p className="item__element">
                        ID
                    </p>
                </div>
                {/* ./ID */}
                {/* Country Code */}
                <div className="header__item">
                    <p className="item__element">
                        Country Code
                    </p>
                </div>
                {/* ./Country Code */}
                {/* State Code */}
                <div className="header__item">
                    <p className="item__element">
                        State Code
                    </p>
                </div>
                {/* ./State Code */}
                {/* Meta Data */}
                <div className="header__item">
                    <p className="item__element">
                        Meta Data
                    </p>
                </div>
                {/* ./Meta Data */}
                {/* ASN */}
                <div className="header__item">
                    <p className="item__element">
                        ASN
                    </p>
                </div>
                {/* ./ASN */}
                {/* Active */}
                <div className="header__item">
                    <p className="item__element">
                        Active Status
                    </p>
                </div>
                {/* ./Active */}
            </div>
            {/* ./Header */}

            {/* List */}
            <div className="list">
                { props.dataList.map(( item, index ) => {
                    return (
                        <div
                            key={ index }
                            className="list__item"
                        >
                            {/* ID */}
                            <div className="item__col">
                                <p
                                    data-title="ID"
                                    className="col__element"
                                >
                                    { item.id ? item.id : '-' }
                                </p>
                            </div>
                            {/* ./ID */}
                            {/* Country Code */}
                            <div className="item__col">
                                <p
                                    data-title="Country Code"
                                    className="col__element"
                                >
                                    { item.countrycode ? item.countrycode : '-' }
                                </p>
                            </div>
                            {/* ./Country Code */}
                            {/* State Code */}
                            <div className="item__col">
                                <p
                                    data-title="State Code"
                                    className="col__element"
                                >
                                    { item.statecode ? item.statecode : '-' }
                                </p>
                            </div>
                            {/* ./State Code */}
                            {/* Meta Data */}
                            <div className="item__col">
                                <p
                                    data-title="Meta Data"
                                    className="col__element"
                                >
                                    { item.meta ? item.meta : '-' }
                                </p>
                            </div>
                            {/* ./Meta Data */}
                            {/* ASN */}
                            <div className="item__col">
                                <p
                                    data-title="ASN"
                                    className="col__element"
                                >
                                    { item.asn ? item.asn : '-' }
                                </p>
                            </div>
                            {/* ./ASN */}
                            {/* Acive */}
                            <div className="item__col">
                                <p
                                    data-title="Active Status"
                                    className="col__element"
                                >
                                    {   item.active
                                            ? item.active === 1 ? 'Active' : 'Inactive'
                                            : '-'
                                    }
                                </p>
                            </div>
                            {/* ./Active */}
                        </div>
                    )
                })}
            </div>
            {/* ./List */}
        </section>
    )
}

export default DistancesList
