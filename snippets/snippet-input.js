// Project Imports
import React from 'react'

export default class SnippetInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <label className={`
                input
                ${ ( this.props.settings && this.props.settings.classes ) ? this.props.settings.classes : '' }
                ${ ( this.props.error && this.props.error.hasError ) ? 'input--danger' : '' }
            `}>
                {/* Label */}
                { this.props.label &&
                    <span className="input__label">
                        { this.props.label.value }
                        { ( this.props.settings && this.props.settings.isRequired ) &&
                            <sup>*</sup>
                        }
                    </span>
                }
                {/* ./Label */}

                {/* Input */}
                { this.props.input &&
                    <input
                        type={ this.props.input.type ? this.props.input.type : 'text' }
                        value={ this.props.input.value }
                        placeholder={ this.props.input.placeholder }
                        className={ `input__element input__element--type-${ this.props.input.type }` }
                        onChange={ this.props.input.setComponentValue }
                    />
                }
                {/* ./Input */}
                
                {/* Error Message */}
                { this.props.error &&
                    <span className="input__error h5">
                        { this.props.error.message }
                    </span>
                }
                {/* ./Error Message */}
            </label>
        )
    }
}
