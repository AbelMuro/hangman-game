export const overlayVariant = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0
    }
}

export const dialogVariant = {
    hidden: {
        scale: 0
    },

    show: {
        scale: 1,
        transition: {
            type: 'spring',
            damping: 6,
            stiffness: 150
        }
    },
    exit: {
        scale: 0
    }
}