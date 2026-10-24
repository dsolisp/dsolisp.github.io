import React from "react";
import { SceneShell } from "../components/SceneShell";
import { SceneCaption } from "../components/SceneCaption";
import { ShotPan } from "../components/ShotPan";

export const CiLabScene: React.FC = () => {
  return (
    <SceneShell>
      <ShotPan
        src="shots/cilab.png"
        startScale={1.06}
        endScale={1.16}
        startY={0}
        endY={-110}
      />
      <SceneCaption
        kicker="02 · CI Lab"
        title="Evidencia en vivo"
        line="Runs de GitHub Actions y Allure solo cuando el reporte tiene resultados reales."
      />
    </SceneShell>
  );
};
