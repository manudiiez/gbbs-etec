import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({children, to, click}) => {
  return (
    <NavLink to={to} onClick={click}>{children}</NavLink>
  )
}

export default Link