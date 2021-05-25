import { styled } from "@material-ui/core";
import React from "react";
import CardsBlock from "../components/MainPage/CardsBlock";
import InfoBlock from "../components/MainPage/InfoBlock";
import LogoBlock from "../components/LogoBlock";
import PhotoBlock from "../components/MainPage/PhotoBlock";
import photo_1 from "../images/photoblock_img1.jpg";
import photo_2 from "../images/photoblock_img2.jpg";
import photo_3 from "../images/photoblock_img3.png";

const MainSection = styled("section")({
  width: "100%",
  // border: "1px solid pink",
});
const Cards = styled("div")({
  marginTop: "50px",
  marginBottom: "50px",
  // border: "2px solid red",
  display: "flex",
  "@media (max-width: 726px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});
const cardInfo = [
  {
    url: photo_1,
    title: "все исходники",
    paragraph:
      "Вы получаете все исходники в день съемки, из которых самостоятельно можете выбрать снимки для ретуши",
  },
  {
    url: photo_2,
    title: "видео-портрет",
    paragraph: "Помимо фотографий я могу снять качественное видео",
  },
  {
    url: photo_3,
    title: "бонусная система",
    paragraph: "На каждую последующую съемку вы получаете бонусы ",
  },
];
function MainPage() {
  return (
    <MainSection>
      <LogoBlock title={"irina evglevskaya"} />
      <PhotoBlock />
      <InfoBlock />
      <Cards>
        {cardInfo.map((card, id) => (
          <CardsBlock
            key={id}
            ulr={card.url}
            title={card.title}
            paragraph={card.paragraph}
          />
        ))}
      </Cards>
    </MainSection>
  );
}

export default MainPage;
