import { styled } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import { colors, fontWeight, letterSpacing } from "../utils/vars";

const HeaderBlock = styled("header")({
  width: "100%",
  // border: "2px solid red",
  height: 60,
  display: "flex",
  justifyContent: "space-between",
  "& ul": {
    // border: '1px solid blue',
    display: "flex",
    alignItems: "center",
  },
  "& ul li": {
    // padding: '0px 15px',
    paddingRight: "30px",
  },
  "& ul li:last-child": {
    paddingRight: "0px",
  },
  "& ul li a": {
    fontFamily: "AngeleciaProReg",
    color: `${colors.mainColor}`,
    fontWeight: `${fontWeight.mainWeight}`,
    letterSpacing: `${letterSpacing.mainLetterSpacing}`,
    transition: "color 0.5s ease 0s",
  },
  "& ul li a:hover": {
    color: "black",
    textDecoration: "underline",
    // borderBottom: '1px solid black'
  },
  "@media (max-width:520px)": {
    // border: '1px solid black',
    justifyContent: "center",
    "& ul:first-child": {
      display: "none",
    },
  },
  "@media (max-width: 350px)": {
    "& ul": {
      fontSize: "14px",
    },
  },
});
function Header() {
  return (
    <HeaderBlock>
      <ul>
        <li>
          <a
            href="https://instagram.com/photobooks46"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <InstagramIcon />{" "}
          </a>
        </li>
        <li>
          <a href="https://vk.com/irinaevgl" target="_blank" rel="noreferrer">
            <EmailIcon />{" "}
          </a>
        </li>
        <li>
          <a href="tel:+79606888800">
            <PhoneOutlinedIcon />{" "}
          </a>
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
        {/* <li>
          <Link to="/">Контакты</Link>
        </li> */}
      </ul>
    </HeaderBlock>
  );
}

export default Header;
