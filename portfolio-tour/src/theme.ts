import { loadFont as loadSyne } from "@remotion/google-fonts/Syne";
import { loadFont as loadFigtree } from "@remotion/google-fonts/Figtree";

const syne = loadSyne("normal", {
  weights: ["700", "800"],
  subsets: ["latin"],
});

const figtree = loadFigtree("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin"],
});

export const fonts = {
  display: syne.fontFamily,
  body: figtree.fontFamily,
};

export const colors = {
  bg: "#06080d",
  bgAlt: "#0b1018",
  text: "#e8eef6",
  muted: "#8b9bb0",
  accent: "#3dffc7",
  accentSoft: "rgba(61, 255, 199, 0.14)",
  border: "rgba(148, 180, 220, 0.12)",
  panel: "rgba(12, 18, 28, 0.88)",
};
