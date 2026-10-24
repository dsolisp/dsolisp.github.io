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
import { useTourLayout } from "../layout";
import { colors, fonts } from "../theme";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const layout = useTourLayout();

  return (
    <SceneShell>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          paddingTop: layout.safeTop,
          paddingBottom: layout.safeBottom,
          paddingLeft: layout.framePadX,
          paddingRight: layout.framePadX + layout.safeRightExtra,
        }}
      >
        <Interactive.Div
          name="Outro block"
          premountFor={fps}
          style={{
            opacity: interpolate(frame, [0, 0.55 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: `0 ${interpolate(frame, [0, 0.6 * fps], [30, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            })}px`,
          }}
        >
          <div
            style={{
              color: colors.accent,
              fontSize: layout.captionKicker + 4,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Ver en vivo
          </div>
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: layout.outroUrl,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: 28,
              wordBreak: "break-word",
            }}
          >
            dsolisp.github.io
          </div>
          <div
            style={{
              color: colors.muted,
              fontSize: layout.outroLine,
              lineHeight: 1.45,
              maxWidth: layout.vertical ? "100%" : 900,
            }}
          >
            CI Lab · Caso Gavel · Arquitectura · Proyectos
            <br />
            Daniel Solis — QA Automation Architect
          </div>
        </Interactive.Div>
      </AbsoluteFill>
    </SceneShell>
  );
};
