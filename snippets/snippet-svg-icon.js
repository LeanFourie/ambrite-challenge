// Project Imports
import React from 'react'

export default class SnippetSvgIcon extends React.Component {
    constructor() {
        super()

        this.image = React.createRef()
        this.state = {}
    }

    imageToSVGConversion = () => {
        let image = this.image.current,
            imgID = image.getAttribute('id'),
            imgClass = image.getAttribute('class'),
            imgURL = image.getAttribute('src'),
            parent = image.parentElement,
            xhr = new XMLHttpRequest()

        xhr.open('GET', imgURL)
        xhr.onreadystatechange = function(data) {
            let xml = data.target.response,
                dom = new DOMParser(),
                svg = dom.parseFromString(xml, 'image/svg+xml')

            if ( xhr.readyState === 4 &&  svg.rootElement != null ) {
                parent.appendChild(svg.rootElement)
                parent.removeChild(image)
            
                if ( typeof imgID != 'undefined' ) {
                    parent.querySelectorAll('svg')[0].setAttribute('id', imgID)
                }

                if (typeof imgClass != 'undefined') {
                    parent.querySelectorAll('svg')[0].setAttribute('class', imgClass)
                }

                parent.querySelectorAll('svg')[0].removeAttribute('xmlns:a')
            }
        }
        xhr.send()
    }

    componentDidMount = () => {
        this.imageToSVGConversion()
    }

    render() {
        return (
            <img
                ref={ this.image }
                src={ this.props.icon && require(`./../assets/icons/${ this.props.icon.name }.svg`).default.src }
                alt={ this.props.icon && this.props.icon.alt }
                className={ this.props.icon && this.props.icon.class }
            />
        )
    }
}
