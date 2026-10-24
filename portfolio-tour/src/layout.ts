import { useVideoConfig } from "remotion";

/**
 * Landscape (YouTube) vs vertical (TikTok / IG Reels).
 * Vertical: full-bleed shot + bottom scrim copy; keep clear of platform chrome.
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
    };
  }

  return {
    vertical: false as const,
    safeTop: 100,
    safeBottom: 64,
    safeX: 72,
    safeRightExtra: 0,
    shotPadding: 56,
    shotRadius: 18,
    captionKicker: 22,
    captionTitle: 54,
    captionLine: 28,
    titleMeta: 28,
    titleName: 120,
    titleRole: 48,
    titlePitch: 32,
    outroUrl: 84,
    outroLine: 32,
    framePadX: 120,
    useTightDisplay: false,
  };
}
