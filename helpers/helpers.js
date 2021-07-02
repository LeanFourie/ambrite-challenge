// Lowercase and join text
export const lowercaseText = (text, operator) => {
    return operator === undefined
            ? text.toLowerCase().split(' ').join('-')
            : text.toLowerCase().split(' ').join(operator)
}


// Uppercase text
export const capitalizeText = (str, lower = false) => {
    return ( lower ? str.toLowerCase() : str )
                .replace(/_/g, ' ')
                .replace(/-/g, ' ')
                .replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())
}


// Accordion
export const accordion = ( e, containerClass, parentClass ) => {
    let el = e.currentTarget,
        parent = el.closest( parentClass ),
        bodyContent = parent.children[1],
        allTabs = el.closest( containerClass ).children,
        totalHeight = 0
        
    Array.prototype.forEach.call(bodyContent.children, (child, index) => {
        totalHeight += child.offsetHeight
    })

    if ( parent.classList.contains('item--active') ) {
        parent.classList.remove('item--active')
        bodyContent.style.height = 0
        bodyContent.style.overflow = 'hidden'
    } else {
        Array.prototype.forEach.call(allTabs, (tab, index) => {
            tab.classList.remove('item--active')
            tab.children[1].style.height = 0
            tab.children[1].style.overflow = 'hidden'
        })

        parent.classList.add('item--active')
        bodyContent.style.height = totalHeight + 'px'
        setTimeout(() => {
            bodyContent.style.overflow = 'visible'
        }, 400)
    }
}


// Check if mobile
export const checkWindowSize = () => {
    let mobileViewport = false

    if ( window.matchMedia('(max-width: 1200px)').matches ) {
        mobileViewport = true
    }

    return mobileViewport
}
