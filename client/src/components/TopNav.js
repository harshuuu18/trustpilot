import React from 'react'
import {Link} from 'react-router-dom'

function TopNav() {
    return (
        <>
        <nav>
            <Link to='/'>
                positive
            </Link>
                
            <Link to='/negative'>
                Negative
            </Link>
        </nav>
        <br /><br /><br /><br /><br />
        </>
    )
}

export default TopNav
