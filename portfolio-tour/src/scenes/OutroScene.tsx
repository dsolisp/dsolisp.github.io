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

export const OutroScene: React.FC = () => {
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
              fontSize: 26,
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
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: 28,
            }}
          >
            dsolisp.github.io
          </div>
          <div
            style={{
              color: colors.muted,
              fontSize: 32,
              lineHeight: 1.45,
              maxWidth: 900,
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
