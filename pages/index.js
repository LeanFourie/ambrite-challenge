// Project Imports
import React from 'react'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import HomeLinks from './../sections/homepage/home-links'

// Page
function Home( props ) {
    return (
        <DefaultTheme
            page={{
                title: 'Home',
                identifier: 'Home Page'
            }}
        >
            {/* Links */}
            <HomeLinks />
            {/* ./Links */}
        </DefaultTheme>
    )
}

export default Home
