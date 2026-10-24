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
import { useTourLayout } from "../layout";
import { colors } from "../theme";

type ShotPanProps = {
  readonly src: string;
  readonly mobileSrc?: string;
  readonly startScale?: number;
  readonly endScale?: number;
  readonly startY?: number;
  readonly endY?: number;
};

export const ShotPan: React.FC<ShotPanProps> = ({
  src,
  mobileSrc,
  startScale = 1.02,
  endScale = 1.08,
  startY = 0,
  endY = -36,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const layout = useTourLayout();

  const progress = interpolate(frame, [0, durationInFrames - 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const scale = startScale + (endScale - startScale) * progress;
  const translateY = startY + (endY - startY) * progress;
  const file = layout.vertical && mobileSrc ? mobileSrc : src;
  const reveal = interpolate(frame, [0, 0.35 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  if (layout.vertical) {
    return (
      <AbsoluteFill style={{ opacity: reveal }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "66%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              scale,
              translate: `0 ${translateY}px`,
            }}
          >
            <Img
              src={staticFile(file)}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
        <AbsoluteFill
          style={{
            backgroundImage: `linear-gradient(
              180deg,
              transparent 32%,
              rgba(6, 8, 13, 0.78) 52%,
              rgba(6, 8, 13, 0.97) 68%,
              ${colors.bg} 80%
            )`,
          }}
        />
      </AbsoluteFill>
    );
  }

  // Landscape: full-bleed shot + left/bottom scrim (no inset card).
  return (
    <AbsoluteFill style={{ opacity: reveal, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          scale,
          translate: `0 ${translateY}px`,
        }}
      >
        <Img
          src={staticFile(file)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(6, 8, 13, 0.82) 0%,
              rgba(6, 8, 13, 0.35) 42%,
              transparent 62%
            ),
            linear-gradient(
              180deg,
              transparent 48%,
              rgba(6, 8, 13, 0.55) 72%,
              rgba(6, 8, 13, 0.92) 100%
            )
          `,
        }}
      />
    </AbsoluteFill>
  );
};
