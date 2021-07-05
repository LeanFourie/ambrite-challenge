// Project Imports
import React from 'react'

// NextJS imports
import Head from 'next/head'

// Helpers
import { lowercaseText } from '../helpers/helpers'

// Sections
import SharedSidebar from './../sections/shared/shared-sidebar'

// Snippets
import SnippetSvgIcon from './../snippets/snippet-svg-icon'

export default function DefaultTheme( props ) {
    return (
        <div className="layout layout--default">
				{/* SEO */}
				<Head>
					<title>{ props.page && props.page.title } </title>
					{/* <link rel="icon" href="/favicon.png" /> */}
				</Head>
				{/* ./SEO */}

                {/* Background */}
                <div className="layout__background">
                    <img
                        src="/image-background.svg"
                        className="background__element image--cover"
                    />
                </div>
                {/* Background */}

                {/* Sidebar */}
                <SharedSidebar />
                {/* Sidebar */}
	
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
