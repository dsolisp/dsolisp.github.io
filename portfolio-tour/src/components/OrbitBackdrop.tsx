import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors } from "../theme";

/** Soft spinning rings — presence, not noise. */
export const OrbitBackdrop: React.FC<{
  readonly opacity?: number;
}> = ({ opacity = 0.55 }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const spin = interpolate(frame, [0, 40 * fps], [0, 360], {
    extrapolateRight: "extend",
  });
  const spinRev = interpolate(frame, [0, 28 * fps], [0, -360], {
    extrapolateRight: "extend",
  });
  const breathe = interpolate(
    frame,
    [0, durationInFrames],
    [1, 1.06],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    },
  );
  const fadeIn = interpolate(frame, [0, 0.5 * fps], [0, opacity], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: fadeIn,
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <svg
        width="160%"
        height="160%"
        viewBox="0 0 640 640"
        style={{
          position: "absolute",
          left: "50%",
          top: "38%",
          translate: "-50% -50%",
          rotate: `${spin}deg`,
          scale: breathe,
        }}
      >
        <circle
          cx="320"
          cy="320"
          r="300"
          fill="none"
          stroke={colors.accent}
          strokeWidth="2.2"
          strokeOpacity="0.55"
        />
        <circle
          cx="320"
          cy="20"
          r="5"
          fill={colors.accent}
        />
      </svg>
      <svg
        width="130%"
        height="130%"
        viewBox="0 0 640 640"
        style={{
          position: "absolute",
          left: "50%",
          top: "38%",
          translate: "-50% -50%",
          rotate: `${spinRev}deg`,
        }}
      >
        <circle
          cx="320"
          cy="320"
          r="230"
          fill="none"
          stroke={colors.accent}
          strokeWidth="1.8"
          strokeDasharray="9 12"
          strokeOpacity="0.4"
        />
        <circle
          cx="320"
          cy="320"
          r="160"
          fill="none"
          stroke={colors.accent}
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
        <circle cx="550" cy="320" r="4" fill={colors.accent} />
      </svg>
    </AbsoluteFill>
  );
};
