import { useVideoConfig } from "remotion";

/**
 * Landscape (YouTube) vs vertical (TikTok / IG Reels).
 * Both: full-bleed media + scrim copy (no stacked cards).
 */
export function useTourLayout() {
  const { width, height } = useVideoConfig();
  const vertical = height > width;

  if (vertical) {
    return {
      vertical: true as const,
      safeTop: 140,
      safeBottom: 280,
      safeX: 40,
      safeRightExtra: 28,
      shotPadding: 0,
      shotRadius: 0,
      captionKicker: 17,
      captionTitle: 38,
      captionLine: 23,
      titleMeta: 18,
      titleName: 56,
      titleRole: 28,
      titlePitch: 24,
      outroUrl: 40,
      outroLine: 22,
      framePadX: 44,
      useTightDisplay: true,
      cliMaxWidth: undefined as number | undefined,
      cliPadTop: 160,
      cliPadX: 36,
      cliFontSize: 22,
    };
  }

  return {
    vertical: false as const,
    safeTop: 80,
    safeBottom: 72,
    safeX: 80,
    safeRightExtra: 0,
    shotPadding: 0,
    shotRadius: 0,
    captionKicker: 20,
    captionTitle: 48,
    captionLine: 26,
    titleMeta: 24,
    titleName: 96,
    titleRole: 40,
    titlePitch: 30,
    outroUrl: 72,
    outroLine: 28,
    framePadX: 100,
    useTightDisplay: false,
    cliMaxWidth: 720,
    cliPadTop: 140,
    cliPadX: 80,
    cliFontSize: 26,
  };
}
