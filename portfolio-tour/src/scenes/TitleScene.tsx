import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SceneShell } from "../components/SceneShell";
import { colors, fonts } from "../theme";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <SceneShell>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          padding: "0 120px",
        }}
      >
        <Interactive.Div
          name="Title block"
          premountFor={fps}
          style={{
            opacity: interpolate(frame, [0, 0.6 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: `0 ${interpolate(frame, [0, 0.7 * fps], [36, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            })}px`,
          }}
        >
          <div
            style={{
              color: colors.muted,
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            Costa Rica · Remote-ready
          </div>
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 120,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              marginBottom: 22,
            }}
          >
            Daniel Solis
          </div>
          <div
            style={{
              color: colors.accent,
              fontFamily: fonts.display,
              fontSize: 48,
              fontWeight: 700,
              marginBottom: 28,
            }}
          >
            QA Automation Architect
          </div>
          <div
            style={{
              color: colors.muted,
              fontSize: 32,
              maxWidth: 980,
              lineHeight: 1.4,
            }}
          >
            Tour del portafolio: evidencia en CI, Gavel y sistemas de calidad
            mantenibles.
          </div>
        </Interactive.Div>
      </AbsoluteFill>
    </SceneShell>
  );
};
