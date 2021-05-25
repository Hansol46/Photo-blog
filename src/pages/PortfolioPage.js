import { styled } from "@material-ui/core";
import React from "react";
import LogoBlock from "../components/LogoBlock";
import GalleryBlock from "../components/PortfolioPage/GalleryBlock";
import PhotoCards from "../components/PortfolioPage/PhotoCards";


const PortfolioSection = styled("section")({
  width: "100%",
});

function PortfolioPage() {
  return (
    <PortfolioSection>
      <LogoBlock title={"Галерея"} />

      <GalleryBlock />

      <PhotoCards />
    </PortfolioSection>
  );
}

export default PortfolioPage;
