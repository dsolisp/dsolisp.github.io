import React from "react";
import { SceneShell } from "../components/SceneShell";
import { SceneCaption } from "../components/SceneCaption";
import { ShotPan } from "../components/ShotPan";

export const HeroScene: React.FC = () => {
  return (
    <SceneShell>
      <ShotPan
        src="shots/hero-orbits.png"
        startScale={1.05}
        endScale={1.14}
        startY={10}
        endY={-40}
      />
      <SceneCaption
        kicker="01 · Hero"
        title="Marca primero"
        line="Orbits en movimiento + plano CLI de Gavel — una composición, sin tapar el nombre."
      />
    </SceneShell>
  );
};
