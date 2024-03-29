import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './Stateprovider';

export default function Header() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
        <NavLink to="/">
        <img className="header__logo"
        src='https://crmwebsales.nl/wp-content/uploads/2021/03/LogoMakr-1Q2G44.png' alt=""/>
        </NavLink>

        <div className="header__search">
            <input className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon"/>
        </div>    

        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">
                Hello</span>
                <span className="header__optionLineTwo">
                Sign In</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">
                Return</span>
                <span className="header__optionLineTwo">
                & orders</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">
                Your</span>
                <span className="header__optionLineTwo">
                Prime</span>
            </div>
            
            <NavLink to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
            </NavLink>
        </div>
    </div>
  )
}
