import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../theme";

export const SceneShell: React.FC<{
  readonly children: React.ReactNode;
}> = ({ children }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: fonts.body,
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 55% at 82% 28%, ${colors.accentSoft}, transparent 62%),
            radial-gradient(ellipse 45% 40% at 8% 78%, rgba(56, 140, 255, 0.12), transparent 58%)
          `,
        }}
      />
      {children}
    </AbsoluteFill>
  );
};
