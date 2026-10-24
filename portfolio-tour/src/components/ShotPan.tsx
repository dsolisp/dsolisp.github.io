import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors } from "../theme";

type ShotPanProps = {
  readonly src: string;
  readonly startScale?: number;
  readonly endScale?: number;
  readonly startY?: number;
  readonly endY?: number;
};

export const ShotPan: React.FC<ShotPanProps> = ({
  src,
  startScale = 1.08,
  endScale = 1.18,
  startY = 0,
  endY = -80,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames - 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const scale = startScale + (endScale - startScale) * progress;
  const translateY = startY + (endY - startY) * progress;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 56,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 18,
          border: `1px solid ${colors.border}`,
          overflow: "hidden",
          backgroundColor: colors.bgAlt,
          boxShadow: "0 28px 80px rgba(0,0,0,0.45)",
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            scale,
            translate: `0 ${translateY}px`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
