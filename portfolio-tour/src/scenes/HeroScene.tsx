import React from "react";
import { CliPanel } from "../components/CliPanel";
import { OrbitBackdrop } from "../components/OrbitBackdrop";
import { SceneCaption } from "../components/SceneCaption";
import { SceneShell } from "../components/SceneShell";

/** Same hero language on 16:9 and 9:16 — native CLI + orbits, no screenshot stretch. */
export const HeroScene: React.FC = () => {
  return (
    <SceneShell>
      <OrbitBackdrop opacity={0.7} />
      <CliPanel />
      <SceneCaption
        kicker="01 · Hero"
        title="Marca primero"
        line="Orbits + CLI de Gavel: una composición, sin tapar el nombre."
      />
    </SceneShell>
  );
};
