import React from "react";
import { Composition, Folder } from "remotion";
import { PortfolioTour, PORTFOLIO_TOUR_DURATION } from "./PortfolioTour";
import { TitleScene } from "./scenes/TitleScene";
import { HeroScene } from "./scenes/HeroScene";
import { CiLabScene } from "./scenes/CiLabScene";
import { GavelScene } from "./scenes/GavelScene";
import { ArchitectureScene } from "./scenes/ArchitectureScene";
import { ProjectsScene } from "./scenes/ProjectsScene";
import { AboutScene } from "./scenes/AboutScene";
import { OutroScene } from "./scenes/OutroScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Scenes">
        <Composition
          id="Title"
          component={TitleScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={105}
        />
        <Composition
          id="Hero"
          component={HeroScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="CiLab"
          component={CiLabScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="Gavel"
          component={GavelScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="Architecture"
          component={ArchitectureScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={135}
        />
        <Composition
          id="Projects"
          component={ProjectsScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="About"
          component={AboutScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={135}
        />
        <Composition
          id="Outro"
          component={OutroScene}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={120}
        />
      </Folder>
      <Folder name="ScenesMobile">
        <Composition
          id="TitleMobile"
          component={TitleScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={105}
        />
        <Composition
          id="HeroMobile"
          component={HeroScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="CiLabMobile"
          component={CiLabScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="GavelMobile"
          component={GavelScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="ArchitectureMobile"
          component={ArchitectureScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={135}
        />
        <Composition
          id="ProjectsMobile"
          component={ProjectsScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={150}
        />
        <Composition
          id="AboutMobile"
          component={AboutScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={135}
        />
        <Composition
          id="OutroMobile"
          component={OutroScene}
          width={1080}
          height={1920}
          fps={30}
          durationInFrames={120}
        />
      </Folder>
      <Composition
        id="PortfolioTour"
        component={PortfolioTour}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={PORTFOLIO_TOUR_DURATION}
      />
      <Composition
        id="PortfolioTourMobile"
        component={PortfolioTour}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={PORTFOLIO_TOUR_DURATION}
      />
    </>
  );
};
