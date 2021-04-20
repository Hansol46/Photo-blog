import { styled } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import {colors} from '../utils/vars'

const HeaderBlock = styled("header")({
  width: '100%',
  // border: "2px solid red",
  height: 60,
  display: "flex",
  justifyContent: "space-between",
  '& ul' : {
    // border: '1px solid blue',
    display: 'flex',
    alignItems: 'center'
  },
  '& ul li': {
    padding: '0px 15px',
  },
  '& ul li a': {
    color: '#515351',
    fontWeight: '500',
    letterSpacing: '1px',
    transition: 'color 0.5s ease 0s',
  },
  '& ul li a:hover': {
    color: 'black',
    textDecoration: 'underline'
    // borderBottom: '1px solid black'
  }
});
function Header() {
  return (
    <HeaderBlock>
      <ul>
        <li>
          <Link to='#'> <InstagramIcon /> </Link>
        </li>
        <li>
        <Link to='#'> <FacebookIcon /> </Link>
        </li>
        <li>
        <Link to='#'><PhoneOutlinedIcon /> </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/portfolio">Портфолио</Link>
        </li>
        <li>
          <Link to="/about">Об авторе</Link>
        </li>
        <li>
          <Link to="/">Контакты</Link>
        </li>
      </ul>
    </HeaderBlock>
  );
}

export default Header;
