import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
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

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        padding: "0 72px 64px",
        pointerEvents: "none",
      }}
    >
      <Interactive.Div
        name="Caption card"
        premountFor={fps}
        style={{
          maxWidth: 920,
          padding: "28px 32px",
          borderRadius: 16,
          border: `1px solid ${colors.border}`,
          backgroundColor: colors.panel,
          backdropFilter: "blur(10px)",
          opacity: interpolate(frame, [0, 0.45 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `0 ${interpolate(frame, [0, 0.5 * fps], [28, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px`,
        }}
      >
        <div
          style={{
            color: colors.accent,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 54,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 12,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: colors.muted,
            fontSize: 28,
            lineHeight: 1.35,
            maxWidth: 820,
          }}
        >
          {line}
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
