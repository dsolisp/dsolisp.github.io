import React from "react";
import { SceneShell } from "../components/SceneShell";
import { SceneCaption } from "../components/SceneCaption";
import { ShotPan } from "../components/ShotPan";

export const GavelScene: React.FC = () => {
  return (
    <SceneShell>
      <ShotPan
        src="shots/gavel.png"
        mobileSrc="shots/gavel-mobile.png"
        startScale={1.04}
        endScale={1.12}
        startY={0}
        endY={-70}
      />
      <SceneCaption
        kicker="03 · Gavel"
        title="Test Constitution"
        line="Quality gates open-source en CI — la arquitectura de calidad se exige, no solo se describe."
      />
    </SceneShell>
  );
};
