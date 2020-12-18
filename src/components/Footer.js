import React from 'react'
import './style.css'

function Footer() {
    return (
        <div className="footer">
            {new Date().getFullYear()} &#169; VanityES. All rights reserved
        </div>
    )
}

export default Footer