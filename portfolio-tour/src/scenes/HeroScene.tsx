import React from "react";
import { useVideoConfig } from "remotion";
import { CliPanel } from "../components/CliPanel";
import { OrbitBackdrop } from "../components/OrbitBackdrop";
import { SceneCaption } from "../components/SceneCaption";
import { SceneShell } from "../components/SceneShell";
import { ShotPan } from "../components/ShotPan";

export const HeroScene: React.FC = () => {
  const { width, height } = useVideoConfig();
  const vertical = height > width;

  if (vertical) {
    return (
      <SceneShell>
        <OrbitBackdrop opacity={0.65} />
        <CliPanel />
        <SceneCaption
          kicker="01 · Hero"
          title="Marca primero"
          line="Orbits + CLI de Gavel: una composición, sin tapar el nombre."
        />
      </SceneShell>
    );
  }

  return (
    <SceneShell>
      <ShotPan
        src="shots/hero-orbits.png"
        mobileSrc="shots/hero-mobile.png"
        startScale={1.05}
        endScale={1.14}
        startY={10}
        endY={-40}
      />
      <SceneCaption
        kicker="01 · Hero"
        title="Marca primero"
        line="Orbits + CLI de Gavel: una composición, sin tapar el nombre."
      />
    </SceneShell>
  );
};
