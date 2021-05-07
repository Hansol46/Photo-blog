import { styled } from "@material-ui/core";
import React from "react";
import CardsBlock from "../components/MainPage/CardsBlock";
import InfoBlock from "../components/MainPage/InfoBlock";
import LogoBlock from "../components/LogoBlock";
import PhotoBlock from "../components/MainPage/PhotoBlock";

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
    url:
      "http://static-cdn4.vigbo.tech/u81085/91828/blog/5447832/4851468/63331623/500-f5daf0b350423a184c632705528e5f14.png",
    title: "все исходники",
    paragraph:
      "Вы получаете все исходники в день съемки, из которых самостоятельно можете выбрать снимки для ретуши",
  },
  {
    url:
      "http://static-cdn4.vigbo.tech/u81085/91828/blog/5447832/4851468/63331632/500-7d367894c4301455dba9a4e7c64a1e2e.png",
    title: "видео-портрет",
    paragraph: "Помимо фотографий я могу снять качественное видео",
  },
  {
    url:
      "http://static-cdn4.vigbo.tech/u81085/91828/blog/5447832/4851468/63331636/500-d94eb13fee1ab1f4502e9b276c9a949c.png",
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
