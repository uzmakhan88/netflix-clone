import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Nav.css"

const Nav = () => {

    

  return (
    <div className={"nav"}>
        <img className='nav__logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="Netflix Logo" />
        <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar Logo"  />

      
    </div>
  )
}

export default Nav
