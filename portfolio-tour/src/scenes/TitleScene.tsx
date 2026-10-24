import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { OrbitBackdrop } from "../components/OrbitBackdrop";
import { SceneShell } from "../components/SceneShell";
import { useTourLayout } from "../layout";
import { colors, fonts } from "../theme";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const layout = useTourLayout();

  const line = (delay: number) => ({
    opacity: interpolate(frame, [delay, delay + 0.55 * fps], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }),
    translate: `0 ${interpolate(frame, [delay, delay + 0.6 * fps], [28, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    })}px`,
  });

  const rule = interpolate(frame, [0.9 * fps, 1.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <SceneShell>
      <OrbitBackdrop opacity={layout.vertical ? 0.7 : 0.45} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          paddingTop: layout.safeTop,
          paddingBottom: layout.safeBottom,
          paddingLeft: layout.framePadX,
          paddingRight: layout.framePadX + layout.safeRightExtra,
        }}
      >
        <Interactive.Div name="Title block" premountFor={fps}>
          <div style={line(0)}>
            <div
              style={{
                color: colors.muted,
                fontFamily: fonts.body,
                fontSize: layout.titleMeta,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Costa Rica · Remote-ready
            </div>
          </div>
          <div style={line(0.18 * fps)}>
            <div
              style={{
                fontFamily: layout.useTightDisplay
                  ? fonts.displayTight
                  : fonts.display,
                fontSize: layout.titleName,
                fontWeight: 800,
                letterSpacing: layout.vertical ? "-0.02em" : "-0.04em",
                lineHeight: 1.02,
                marginBottom: 16,
              }}
            >
              Daniel Solis
            </div>
          </div>
          <div
            style={{
              width: 88 * rule,
              height: 3,
              backgroundColor: colors.accent,
              marginBottom: 18,
            }}
          />
          <div style={line(0.35 * fps)}>
            <div
              style={{
                color: colors.accent,
                fontFamily: fonts.body,
                fontSize: layout.titleRole,
                fontWeight: 700,
                marginBottom: 22,
                letterSpacing: "-0.01em",
              }}
            >
              QA Automation Architect
            </div>
          </div>
          <div style={line(0.5 * fps)}>
            <div
              style={{
                color: colors.muted,
                fontFamily: fonts.body,
                fontSize: layout.titlePitch,
                maxWidth: layout.vertical ? "22ch" : 980,
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              Tour del portafolio: evidencia en CI, Gavel y sistemas de calidad
              mantenibles.
            </div>
          </div>
        </Interactive.Div>
      </AbsoluteFill>
    </SceneShell>
  );
};
