import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
        <div>
            Copyright @ {today.getFullYear()}
        </div>
    )
}

export default Footer
