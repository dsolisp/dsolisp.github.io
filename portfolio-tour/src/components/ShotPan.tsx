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
  /** Prefer a true 9:16 / phone capture when the composition is vertical. */
  readonly mobileSrc?: string;
  readonly startScale?: number;
  readonly endScale?: number;
  readonly startY?: number;
  readonly endY?: number;
};

export const ShotPan: React.FC<ShotPanProps> = ({
  src,
  mobileSrc,
  startScale = 1.08,
  endScale = 1.18,
  startY = 0,
  endY = -80,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const layout = useTourLayout();

  const progress = interpolate(frame, [0, durationInFrames - 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const scale = startScale + (endScale - startScale) * progress;
  const translateY = startY + (endY - startY) * progress;
  const file = layout.vertical && mobileSrc ? mobileSrc : src;
  const bottomReserve = layout.vertical ? layout.safeBottom + 8 : layout.shotPadding;

  return (
    <AbsoluteFill
      style={{
        justifyContent: layout.vertical ? "flex-start" : "center",
        alignItems: "center",
        paddingTop: layout.vertical ? layout.safeTop : layout.shotPadding,
        paddingBottom: bottomReserve,
        paddingLeft: layout.shotPadding,
        paddingRight: layout.shotPadding + (layout.vertical ? layout.safeRightExtra : 0),
      }}
    >
      <div
        style={{
          width: "100%",
          height: layout.vertical ? "58%" : "100%",
          borderRadius: layout.shotRadius,
          border: `1px solid ${colors.border}`,
          overflow: "hidden",
          backgroundColor: colors.bgAlt,
          boxShadow: "0 28px 80px rgba(0,0,0,0.45)",
        }}
      >
        <Img
          src={staticFile(file)}
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
