import React from "react";
import { SceneShell } from "../components/SceneShell";
import { SceneCaption } from "../components/SceneCaption";
import { ShotPan } from "../components/ShotPan";

export const ArchitectureScene: React.FC = () => {
  return (
    <SceneShell>
      <ShotPan
        src="shots/architecture.png"
        startScale={1.05}
        endScale={1.13}
        startY={0}
        endY={-60}
      />
      <SceneCaption
        kicker="04 · Pipeline"
        title="Del push a la prueba"
        line="Actions en paralelo → Allure + R2 → portafolio y dashboard sin servidores de app."
      />
    </SceneShell>
  );
};
