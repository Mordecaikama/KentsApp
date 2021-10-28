import React from 'react'
import './navbar.css'
import { IconButton, Button } from '@mui/material'
import { Search, Menu, ArrowDownward } from '@mui/icons-material'

function Header() {
  return (
    <div className='Header'>
      <div className='topBarWrapper'>
        <h4 className='logo'>KentShop</h4>

        {/* //search goes here */}
        <div className='search'>
          <Button
            variant='contained'
            endIcon={<ArrowDownward />}
            style={{ background: '#595e63' }}
          >
            All
          </Button>
          <input type='text' placeholder='search' />
          <Button startIcon={<Search />} variant='contained'>
            Search
          </Button>
        </div>

        {/* left */}
        <div className='Left'>
          <ul className='tags'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <span className='menu'>
            <i className='far fa-bars'></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
