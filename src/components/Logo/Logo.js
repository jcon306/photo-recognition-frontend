import React from 'react'
import Tilt from 'react-parallax-tilt'
import logoIcon from './logoIcon.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt' options={{ max: 55 }}>
                    <div className='Tilt-inner pa3 '>
                        <img style={{paddingTop: '5px'}} src={logoIcon} alt='logo'/>
                    </div>
            </Tilt>
        </div>
    )
}

export default Logo