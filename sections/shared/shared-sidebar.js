// Project Imports
import React from 'react'
import { useRouter } from 'next/router'

// NextJS imports
import Link from 'next/link'

// Snippets
import SnippetSvgIcon from './../../snippets/snippet-svg-icon'

export default function SharedSidebar() {
    const router = useRouter()

    return (
        <div className="sidebar">
            <div className="sidebar__links">
                <Link href="/">
                    <a className={`
                        links__item
                        ${ router.pathname === '/' ? 'links__item--active' : '' }
                    `}>
                        <span className="item__icon">
                            <SnippetSvgIcon
                                icon={{
                                    name: 'icon-home',
                                    class: 'icon__element'
                                }}
                            />
                        </span>
                        <span className="item__label">
                            Home
                        </span>
                    </a>
                </Link>
                <Link href="/validity-checks">
                    <a className={`
                        links__item
                        ${ router.pathname === '/validity-checks' ? 'links__item--active' : '' }
                    `}>
                        <span className="item__icon">
                            <SnippetSvgIcon
                                icon={{
                                    name: 'icon-check',
                                    class: 'icon__element'
                                }}
                            />
                        </span>
                        <span className="item__label">
                            Validity checks
                        </span>
                    </a>
                </Link>
                <Link href="/distances">
                    <a className={`
                        links__item
                        ${ router.pathname === '/distances' ? 'links__item--active' : '' }
                    `}>
                        <span className="item__icon">
                            <SnippetSvgIcon
                                icon={{
                                    name: 'icon-pin-globe',
                                    class: 'icon__element'
                                }}
                            />
                        </span>
                        <span className="item__label">
                            Distance checks
                        </span>
                    </a>
                </Link>
                <Link href="/array-union">
                    <a className={`
                        links__item
                        ${ router.pathname === '/array-union' ? 'links__item--active' : '' }
                    `}>
                        <span className="item__icon">
                            <SnippetSvgIcon
                                icon={{
                                    name: 'icon-unite',
                                    class: 'icon__element'
                                }}
                            />
                        </span>
                        <span className="item__label">
                            Array union
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    )
}
