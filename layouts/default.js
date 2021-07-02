// Project Imports
import React from 'react'

// NextJS imports
import Head from 'next/head'

// Helpers
import { lowercaseText } from '../helpers/helpers'

// Sections
import SharedHeader from './../sections/shared/shared-header'

export default function DefaultTheme( props ) {
    return (
        <div className="layout layout--default">
				{/* SEO */}
				<Head>
					<title>{ props.page && props.page.title } </title>
					{/* <link rel="icon" href="/favicon.png" /> */}
				</Head>
				{/* ./SEO */}

                {/* Header */}
                <SharedHeader />
                {/* Header */}
	
				{/* Pages */}
				<div className={`
                    page
                    page--${ ( props.page && props.page.identifier )
                                ? lowercaseText(props.page.identifier)
                                : 'default'
                    }
                `}>
					{ props.children }
				</div>
				{/* ./Pages */}
        </div>
    )
}
