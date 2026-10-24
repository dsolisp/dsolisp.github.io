import { useVideoConfig } from "remotion";

/**
 * Shared responsive layout for landscape (YouTube) vs vertical (TikTok / IG Reels).
 * Vertical keeps copy inside platform safe areas (top status + bottom caption/UI chrome).
 */
export function useTourLayout() {
  const { width, height } = useVideoConfig();
  const vertical = height > width;

  if (vertical) {
    return {
      vertical: true as const,
      /** TikTok/IG: clear status / username */
      safeTop: 160,
      /** TikTok/IG: clear caption bar + home indicator */
      safeBottom: 300,
      /** Leave room for right-side action buttons */
      safeX: 48,
      safeRightExtra: 36,
      shotPadding: 28,
      shotRadius: 22,
      captionKicker: 20,
      captionTitle: 48,
      captionLine: 26,
      titleMeta: 22,
      titleName: 84,
      titleRole: 36,
      titlePitch: 28,
      outroUrl: 56,
      outroLine: 26,
      framePadX: 48,
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
  };
}
