import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

/* eslint-disable no-unused-vars */
function header() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
    <div className = 'header'>
        <Link to='/'>
        <img className ='header__logo' src='assets/amazon-dark-logo.png' alt=''/>
        </Link>        
        <div className = 'header__search'>
            <input className ='header__searchInput' type='text'/>
            <SearchIcon className ='header__searchIcon' />    
        </div>

        <div className = 'header__nav'>
            <Link to={!user && "/login"}>
                <div className = 'header__option' onClick={handleAuthentication}>
                        <span className = 'header__optionLineOne'>{!user ? "Hello Guest" : `Hello, ${user.email}`}</span>
                        <span className = 'header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <Link to="/orders">
            <div className = 'header__option'>
                <span className = 'header__optionLineOne'>Returns</span>
                <span className = 'header__optionLineTwo'>& Orders</span>
            </div>
            </Link>

            <div className = 'header__option'>
                <span className = 'header__optionLineOne'>Your</span>
                <span className = 'header__optionLineTwo'>Prime</span>
            </div>
            <Link to='/checkout'>
                <div className = 'header__optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className = {`${basket.length > 0 ? "basket__countFilled" : ""} header__optionLineTwo header__basketCount`}>{basket.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}
/* eslint-enable no-unused-vars */
export default header


