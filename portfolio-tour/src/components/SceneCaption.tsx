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
        name="Caption card"
        premountFor={fps}
        style={{
          width: "100%",
          maxWidth: layout.vertical ? undefined : 920,
          padding: layout.vertical ? "24px 26px" : "28px 32px",
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
            fontSize: layout.captionKicker,
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
            fontSize: layout.captionTitle,
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
            fontSize: layout.captionLine,
            lineHeight: 1.35,
            maxWidth: layout.vertical ? "100%" : 820,
          }}
        >
          {line}
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
