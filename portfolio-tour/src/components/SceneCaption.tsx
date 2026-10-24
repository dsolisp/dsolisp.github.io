import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useTourLayout } from "../layout";
import { colors, fonts } from "../theme";

type SceneCaptionProps = {
  readonly kicker: string;
  readonly title: string;
  readonly line: string;
};

export const SceneCaption: React.FC<SceneCaptionProps> = ({
  kicker,
  title,
  line,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const layout = useTourLayout();

  const enter = interpolate(frame, [0.15 * fps, 0.7 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const rise = interpolate(frame, [0.15 * fps, 0.75 * fps], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const rule = interpolate(frame, [0.35 * fps, 0.9 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        paddingTop: layout.safeTop,
        paddingBottom: layout.safeBottom,
        paddingLeft: layout.safeX,
        paddingRight: layout.safeX + layout.safeRightExtra,
        pointerEvents: "none",
      }}
    >
      <Interactive.Div
        name="Caption"
        premountFor={fps}
        style={{
          width: "100%",
          maxWidth: layout.vertical ? undefined : 780,
          padding: 0,
          border: "none",
          backgroundColor: "transparent",
          opacity: enter,
          translate: `0 ${rise}px`,
        }}
      >
        <div
          style={{
            color: colors.accent,
            fontFamily: fonts.body,
            fontSize: layout.captionKicker,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            fontFamily: layout.useTightDisplay
              ? fonts.displayTight
              : fonts.display,
            fontSize: layout.captionTitle,
            fontWeight: 800,
            letterSpacing: layout.vertical ? "-0.015em" : "-0.03em",
            lineHeight: 1.12,
            marginBottom: 10,
            maxWidth: layout.vertical ? "16ch" : "18ch",
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: (layout.vertical ? 72 : 64) * rule,
            height: 2,
            backgroundColor: colors.accent,
            marginBottom: 14,
          }}
        />
        <div
          style={{
            color: colors.muted,
            fontFamily: fonts.body,
            fontSize: layout.captionLine,
            fontWeight: 500,
            lineHeight: 1.4,
            maxWidth: layout.vertical ? "28ch" : "36ch",
            letterSpacing: "0.01em",
          }}
        >
          {line}
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
