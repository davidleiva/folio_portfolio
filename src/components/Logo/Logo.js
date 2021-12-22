import React from 'react'
import { Link } from 'gatsby'
import { Title } from '../Core'

const Logo = ({ color = 'front', height, className = '', ...rest }) => {
    return (
        <Link to="/" className={`text-decoration-none ${className}`} {...rest}>
            <Title color={color} variant="cardLg" className="mb-0">
                Hello :) I am David Leiva.
            </Title>
        </Link>
    )
}

export default Logo
