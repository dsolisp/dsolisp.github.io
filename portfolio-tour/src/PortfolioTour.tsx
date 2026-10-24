import React from "react";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { TitleScene } from "./scenes/TitleScene";
import { HeroScene } from "./scenes/HeroScene";
import { CiLabScene } from "./scenes/CiLabScene";
import { GavelScene } from "./scenes/GavelScene";
import { ArchitectureScene } from "./scenes/ArchitectureScene";
import { ProjectsScene } from "./scenes/ProjectsScene";
import { AboutScene } from "./scenes/AboutScene";
import { OutroScene } from "./scenes/OutroScene";
import { colors } from "./theme";

const TRANSITION_FRAMES = 20;

export const PortfolioTour: React.FC = () => {
  const { fps, width, height } = useVideoConfig();
  const vertical = height > width;

  const timing = springTiming({
    config: { damping: 200 },
    durationInFrames: TRANSITION_FRAMES,
  });

  const presentation = slide({
    direction: vertical ? "from-bottom" : "from-right",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <TransitionSeries>
        <TransitionSeries.Sequence
          name="Title"
          durationInFrames={105}
          premountFor={fps}
        >
          <TitleScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={timing} />
        <TransitionSeries.Sequence
          name="Hero"
          durationInFrames={150}
          premountFor={fps}
        >
          <HeroScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={timing} />
        <TransitionSeries.Sequence
          name="CI Lab"
          durationInFrames={150}
          premountFor={fps}
        >
          <CiLabScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={timing} />
        <TransitionSeries.Sequence
          name="Gavel"
          durationInFrames={150}
          premountFor={fps}
        >
          <GavelScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={timing} />
        <TransitionSeries.Sequence
          name="Architecture"
          durationInFrames={135}
          premountFor={fps}
        >
          <ArchitectureScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={timing} />
        <TransitionSeries.Sequence
          name="Projects"
          durationInFrames={150}
          premountFor={fps}
        >
          <ProjectsScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={timing} />
        <TransitionSeries.Sequence
          name="About"
          durationInFrames={135}
          premountFor={fps}
        >
          <AboutScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={presentation} timing={timing} />
        <TransitionSeries.Sequence
          name="Outro"
          durationInFrames={120}
          premountFor={fps}
        >
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

/** Sum of scene frames minus transition overlaps (7 × TRANSITION_FRAMES). */
export const PORTFOLIO_TOUR_DURATION =
  105 + 150 + 150 + 150 + 135 + 150 + 135 + 120 - 7 * TRANSITION_FRAMES;
