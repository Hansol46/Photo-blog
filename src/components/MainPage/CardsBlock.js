import React from "react";
import { styled } from "@material-ui/core";
import { colors, letterSpacing, fontWeight } from "../../utils/vars";

const Card = styled("div")({
  // border: "2px solid blue",
  textAlign: "center",
  width: '40%',
  fontFamily: "AngeleciaProReg",
  ["@media (max-width: 726px)"] : {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    width: '100%',
    padding: '0px 20px',
    "&:last-child" : {
      marginBottom: '0px',
    }
    },
  "& img" :{
      maxWidth: '100%',
      width: '150px',
      height: '150px',
      paddingBottom:'15px'
  },
  "& h3": {
    marginBottom: 20,
    color: 'black',
    fontWeight: `${fontWeight.mainWeight}`,
    letterSpacing: `${letterSpacing.mainLetterSpacing}`,
      fontSize: '28px',
  },
  "& p": {
    lineHeight: '1.5',
    color: `${colors.mainColor}`,
    fontWeight: `${fontWeight.mainWeight}`,
    letterSpacing: `${letterSpacing.mainLetterSpacing}`,
  }
});
function CardsBlock(props) {
  const { ulr, title, paragraph } = props;
  return (
    <Card>
      <img src={ulr} alt={`card ${title}`}/>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </Card>
  );
}

export default CardsBlock;
