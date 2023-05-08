import React from 'react'
import './Nav.css'
import ComputerIcon from '@mui/icons-material/Computer';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Nav = () => {
  return (
    <div className="nav">
        <div className="nav___upper">
            <div className="nav___upper___left">
                <div className="nav___upper___left--logo">
                    <img src="https://preview.colorlib.com/assets/img/logo.png" alt="" />
                </div>
                <div className="nav___upper___left--hero">
                    <a href="#">+ IMAGINE</a>
                </div>
            </div>
            <div className="nav___upper___right">
                <ul className="nav___upper___right--list">
                    <li className="nav___upper___right--list--item"><ComputerIcon/></li>
                    <li className="nav___upper___right--list--item"><TabletAndroidIcon/></li>
                    <li className="nav___upper___right--list--item"><PhoneAndroidIcon/></li>
                    <li className="nav___upper___right--list--item"><ShoppingCartIcon/></li>
                    <li className="nav___upper___right--list--item"><ClearIcon/></li>
                </ul>
            </div>
        </div>
        <div className="nav___lower">
            <div className="nav___lower__wrapper">
                <div className="nav___lower__wrapper__left">
                    <a href="#" className="nav___lower__wrapper__left--a">imagine</a> <span>.</span>
                </div>
                <div className="nav___lower__wrapper__right">
                    <ul className="nav___lower__wrapper__right--list">
                        <li className="nav___lower__wrapper__right--list--item">Home</li>
                        <li className="nav___lower__wrapper__right--list--item">Features</li>
                        <li className="nav___lower__wrapper__right--list--item">Absout Us <ExpandMoreIcon sx={{ color: "gray", fontSize: 20}}/></li>
                        <li className="nav___lower__wrapper__right--list--item">Testimonials</li>
                        <li className="nav___lower__wrapper__right--list--item">Blog</li>
                        <li className="nav___lower__wrapper__right--list--item">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav