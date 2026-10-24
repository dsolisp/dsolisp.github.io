import React from "react";
import { SceneShell } from "../components/SceneShell";
import { SceneCaption } from "../components/SceneCaption";
import { ShotPan } from "../components/ShotPan";

export const ProjectsScene: React.FC = () => {
  return (
    <SceneShell>
      <ShotPan
        src="shots/projects.png"
        startScale={1.05}
        endScale={1.14}
        startY={0}
        endY={-90}
      />
      <SceneCaption
        kicker="05 · Proyectos"
        title="Multi-stack comparable"
        line="Playwright, Cypress, Java y Python bajo los mismos estándares de arquitectura."
      />
    </SceneShell>
  );
};
