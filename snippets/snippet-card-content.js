// Project Imports
import React from 'react'

// Snippets
import SnippetSvgIcon from './snippet-svg-icon'

// Page
function SnippetCardContent( props ) {
    return (
        <div className={`
            card
            card--content
            card--${ props.state ? props.state : 'default' }
            ${ props.classes ? props.classes : '' }
            card--${ props.hasHover ? 'has-hover' : 'no-hover' }
        `}>
            <div className="card__title">
                { props.icon &&
                    <span className="title__element title__element--icon">
                        <SnippetSvgIcon
                            icon={{
                                name: props.icon
                            }}
                        />
                    </span>
                }
                { props.title &&
                    <h3 className="title__element title__element--title">
                        { props.title }
                    </h3>
                }
            </div>
            <div className="card__body">
                { props.paragraph ?
                    <p className="body__element body__element--paragraph">
                        { props.paragraph }
                    </p>
                    :
                    <div className="body__element">
                        { props.children }
                    </div>
                }
            </div>
        </div>
    )
}

export default SnippetCardContent
