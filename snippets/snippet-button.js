// Project Imports
import React from 'react'
import Router from 'next/router'

// Snippets
import SnippetSvgIcon from './snippet-svg-icon'

export default class SnippetButton extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    navigate = ( link ) => {
        let route = link.route,
            target = link.target

        target != '_blank'
            ? Router.push(`/${ route }`) 
            : window.open(route, '_blank')
    }

    render () {
        return (
            <div
                className={`
                    button
                    ${ this.props.classes && this.props.classes }
                    ${ this.props.icon ? 'button--icon' : '' }
                    ${ this.props.icon && this.props.icon.position ? 'button--icon-' + this.props.icon.position : '' }
                `}
            >
                <button
                    onClick={(e) => {
                        this.props.click && this.props.click(e)
                        this.props.link != undefined && this.navigate(this.props.link)
                    }}
                    className="button__inner"
                    style={ this.props.styles }
                >
                    {/* Label */}
                    { this.props.label &&
                        <span className="button__label">
                            { this.props.label }
                        </span>
                    }
                    {/* ./Label */}

                    {/* Icon */}
                    { this.props.icon &&
                        <span className="button__icon">
                            <SnippetSvgIcon
                                icon={{
                                    name: this.props.icon.name,
                                    class: 'icon__inner'
                                }}
                            />
                        </span>
                    }
                    {/* Icon */}
                </button>
            </div>
        )
    }
}
