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

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const layout = useTourLayout();

  const enter = (delay: number) => ({
    opacity: interpolate(frame, [delay, delay + 0.5 * fps], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }),
    translate: `0 ${interpolate(frame, [delay, delay + 0.55 * fps], [24, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    })}px`,
  });

  const rule = interpolate(frame, [0.45 * fps, 1.1 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <SceneShell>
      <OrbitBackdrop opacity={layout.vertical ? 0.75 : 0.5} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          paddingTop: layout.safeTop,
          paddingBottom: layout.safeBottom,
          paddingLeft: layout.framePadX,
          paddingRight: layout.framePadX + layout.safeRightExtra,
        }}
      >
        <Interactive.Div name="Outro block" premountFor={fps}>
          <div style={enter(0)}>
            <div
              style={{
                color: colors.accent,
                fontFamily: fonts.body,
                fontSize: layout.captionKicker + 2,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Ver en vivo
            </div>
          </div>
          <div style={enter(0.15 * fps)}>
            <div
              style={{
                fontFamily: layout.useTightDisplay
                  ? fonts.displayTight
                  : fonts.display,
                fontSize: layout.outroUrl,
                fontWeight: 800,
                letterSpacing: layout.vertical ? "-0.015em" : "-0.03em",
                lineHeight: 1.1,
                marginBottom: 16,
                wordBreak: "break-word",
              }}
            >
              dsolisp.github.io
            </div>
          </div>
          <div
            style={{
              width: 72 * rule,
              height: 3,
              backgroundColor: colors.accent,
              marginBottom: 20,
            }}
          />
          <div style={enter(0.35 * fps)}>
            <div
              style={{
                color: colors.muted,
                fontFamily: fonts.body,
                fontSize: layout.outroLine,
                lineHeight: 1.45,
                fontWeight: 500,
                maxWidth: layout.vertical ? "20ch" : 900,
              }}
            >
              CI Lab · Caso Gavel · Arquitectura · Proyectos
              <br />
              Daniel Solis — QA Automation Architect
            </div>
          </div>
        </Interactive.Div>
      </AbsoluteFill>
    </SceneShell>
  );
};
