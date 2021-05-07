import React from "react";
import { styled } from "@material-ui/core";
import { letterSpacing, fontWeight } from "../../utils/vars";
const Info = styled("article")({
  // border: "2px solid pink",
  display: "flex",
  width: "100%",
  "@media (max-width:985px)": {
    flexDirection: "column",
  },
  fontFamily: "AngeleciaProReg",
  fontWeight: `${fontWeight.mainWeight}`,
  letterSpacing: `${letterSpacing.mainLetterSpacing}`,
  "& div:first-child": {
    // border: "2px solid blue",
    width: "50%",

    "& p": {
      fontSize: "16px",
      letterSpacing: "0.25em",
      color: "rgb(199, 199, 199)",
    },
    "@media (max-width:985px)": {
      width: "100%",
      textAlign: "center",
      marginBottom: "40px",
    },
  },
  "& div:last-child": {
    // border: "2px solid green",
    width: "50%",
    "& p": {
      color: "#626262",
      marginBottom: "40px",
      lineHeight: "2.5",
      padding: "0px 20px",
    },
    "& p:last-child": {
      color: "black",
    },
    "@media (max-width:985px)": {
      width: "100%",
    },
  },
  "& h2": {
    marginBottom: "30px",
    letterSpacing: "3px",
    lineHeight: "1.5",
    fontSize: "52px",
    "@media (max-width:985px)": {
      fontSize: "46px",
    },
    "@media (max-width:570px)": {
      fontSize: "32px",
    },
  },
});

function InfoBlock() {
  return (
    <Info>
      <div>
        <h2>Я проживаю вашу историю вместе с вами: от начала и до конца</h2>
        <p>
          <span>©</span> Irina
        </p>
      </div>
      <div>
        <p>
          «Здравствуй, друг! Меня зовут Ирина и я рада, что ты решил заглянуть
          на эту страничку.
        </p>
        <p>
          Фотография — моя самая большая любовь и страсть. Каждая съёмка для
          меня — это уникальная и удивительная история. И я проживаю вашу
          историю вместе с вами: от начала и до конца.
        </p>
        <p>
          На этом сайте вы сможете найти мои работы и ознакомиться с ними. Если
          вам откликнулось — жду вас на съёмку.»
        </p>
        <p>
          Звоните мне по номеру: +7-960-688-88-00, <br />
          Пишите мне на почту: irinaevgl_84@mail.ru
        </p>
      </div>
    </Info>
  );
}

export default InfoBlock;
