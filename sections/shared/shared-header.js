// Project Imports
import React from 'react'

// NextJS imports
import Link from 'next/link'

export default function SharedHeader() {
    return (
        <header className="header">
            <div className="header__links">
                <Link href="/">
                    <a className="links__item">
                        Validity checks
                    </a>
                </Link>
                <Link href="/distances">
                    <a className="links__item">
                        Distance checks
                    </a>
                </Link>
                <Link href="/">
                    <a className="links__item">
                        Array union
                    </a>
                </Link>
            </div>
        </header>
    )
}
