import React from "react";
import { SceneShell } from "../components/SceneShell";
import { SceneCaption } from "../components/SceneCaption";
import { ShotPan } from "../components/ShotPan";

export const AboutScene: React.FC = () => {
  return (
    <SceneShell>
      <ShotPan
        src="shots/about.png"
        startScale={1.04}
        endScale={1.12}
        startY={40}
        endY={-40}
      />
      <SceneCaption
        kicker="06 · Acerca de"
        title="Architect, remote-ready"
        line="Diseño bases multi-stack y superviso calidad cuando escriben tests personas y agentes."
      />
    </SceneShell>
  );
};
