import React from "react";
import ImgHello from "../../images/hello.png";
import { styled } from "@material-ui/core";
import { colors, letterSpacing, fontWeight } from "../../utils/vars";
import { Link } from "react-router-dom";
const MainBlock = styled("article")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // border: "2px solid blue",
  width: "100%",
  fontFamily: "AngeleciaProReg",
  fontWeight: `${fontWeight.mainWeight}`,
  letterSpacing: `${letterSpacing.mainLetterSpacing}`,
});
const ArticleBlock = styled("div")({
  // border: "1px solid red",
  width: "820px",
  textAlign: "center",
  // display: 'flex',
  // justifyContent: 'center',
  "@media(max-width: 985px)": {
    width: "auto",
  },
  "& img": {
    maxWidth: "100%",
    width: 465,
    height: 85,
    // border: "1px solid green",
    marginBottom: "50px",
  },
  "@media (max-width: 726px)": {},
  "& h2": {
    marginBottom: "50px",
    letterSpacing: "3px",
    "@media (max-width: 726px)": {
      fontSize: "18px",
    },
  },
  "& p:first-of-type": {
    marginBottom: "30px",
  },
  "& p": {
    color: `${colors.mainColor}`,
    "@media (max-width: 726px)": {
      fontSize: "16px",
    },
  },
});
const ButtonBlocks = styled("div")({
  marginTop: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& a": {
    borderRadius: "30px",
    marginBottom: "20px",
    display: "block",
    width: 170,
    padding: "15px 30px",
    background: "#f0f0f0;",
    color: "black",
    transition: "background 0.5s ease 0s",
  },
  "& a:hover": {
    border: " 0px solid #618c6d",
    backgroundColor: "#618c6d",
  },
});
function InfoBlock() {
  return (
    <MainBlock>
      <ArticleBlock>
        <img src={ImgHello} alt="helllo" />
        <h2>
          Меня зовут Ирина, я фотографирую, занимаюсь визуалом, и очень люблю
          интересные фотосессии
        </h2>
        <p>Большинство моих работ - фотографии обычных людей, а не моделей. </p>
        <p>
          Со мной - легко, именно поэтому Вам не стоит волноваться о позах,
          одежде и локации. Об этом позабочусь я! Вы можете расслабиться и
          просто получать удовольствие от процесса.
        </p>
        <ButtonBlocks>
          <Link to="/portfolio"> портфолио </Link>
          <Link to="/about"> об авторе </Link>
          {/* <Link to="#"> контакты </Link> */}
        </ButtonBlocks>
      </ArticleBlock>
    </MainBlock>
  );
}

export default InfoBlock;
