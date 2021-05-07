import React from "react";
import { styled } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import { colors, letterSpacing, fontWeight } from "../utils/vars";

const FooterBlock = styled("footer")({
  padding: "65px 0px 50px 0px",
  width: "100%",
  //   border: "2px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& p": {
    fontFamily: "AngeleciaProReg",
    color: `${colors.mainColor}`,
    fontWeight: `${fontWeight.mainWeight}`,
    letterSpacing: `${letterSpacing.mainLetterSpacing}`,
    marginBottom: "30px",
  },
});
const Links = styled("div")({
  "& ul": {
    display: "flex",
  },
  "& ul li a": {
    color: `${colors.mainColor}`,
    fontWeight: `${fontWeight.mainWeight}`,
    letterSpacing: `${letterSpacing.mainLetterSpacing}`,
    transition: "color 0.5s ease 0s",
    padding: "0px 10px",
  },
  "& ul li a:hover": {
    color: "black",
    textDecoration: "underline",
    // borderBottom: '1px solid black'
  },
});
function Footer() {
  return (
    <FooterBlock>
      <p> cвязаться со мной</p>
      <Links>
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
      </Links>
    </FooterBlock>
  );
}

export default Footer;
