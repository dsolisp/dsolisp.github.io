import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useTourLayout } from "../layout";
import { colors, fonts } from "../theme";

/** Crisp Gavel CLI plane — drawn in Remotion, not upscaled from a screenshot. */
export const CliPanel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const layout = useTourLayout();

  const enter = interpolate(frame, [0.1 * fps, 0.7 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const rise = interpolate(frame, [0.1 * fps, 0.75 * fps], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const line = (delay: number, text: React.ReactNode) => {
    const o = interpolate(frame, [delay, delay + 0.35 * fps], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return <div style={{ opacity: o, marginBottom: layout.vertical ? 6 : 8 }}>{text}</div>;
  };

  return (
    <AbsoluteFill
      style={{
        justifyContent: layout.vertical ? "flex-start" : "center",
        alignItems: layout.vertical ? "stretch" : "flex-end",
        paddingTop: layout.cliPadTop,
        paddingBottom: layout.vertical ? 320 : 120,
        paddingLeft: layout.vertical ? layout.cliPadX : undefined,
        paddingRight: layout.cliPadX,
        opacity: enter,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: layout.cliMaxWidth,
          borderRadius: 14,
          border: `1px solid ${colors.border}`,
          overflow: "hidden",
          backgroundColor: "rgba(7, 10, 16, 0.92)",
          translate: `0 ${rise}px`,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          fontSize: layout.cliFontSize,
          lineHeight: 1.45,
          color: colors.text,
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 16px",
            borderBottom: `1px solid ${colors.border}`,
            backgroundColor: "rgba(10, 14, 20, 0.9)",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#e35d6a" }} />
          <span style={{ width: 10, height: 10, borderRadius: 99, background: "#e0b14a" }} />
          <span style={{ width: 10, height: 10, borderRadius: 99, background: colors.accent }} />
          <span
            style={{
              marginLeft: 10,
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: colors.muted,
              fontFamily: fonts.body,
              fontWeight: 700,
            }}
          >
            gavel · audit
          </span>
        </div>
        <div style={{ padding: "18px 18px 22px" }}>
          {line(
            0.35 * fps,
            <>
              <span style={{ color: colors.accent, fontWeight: 700 }}>$</span>{" "}
              npx @dsolisp/gavel audit .
            </>,
          )}
          {line(
            0.55 * fps,
            <span style={{ color: colors.muted }}>
              Framework: Playwright · TypeScript
            </span>,
          )}
          {line(
            0.7 * fps,
            <span style={{ color: colors.muted }}>
              Constitution: layered POM · a11y · no sleeps
            </span>,
          )}
          {line(
            0.95 * fps,
            <>
              <span style={{ color: "#e35d6a", fontWeight: 700 }}>✗</span> brittle-assert
            </>,
          )}
          {line(
            1.1 * fps,
            <>
              <span style={{ color: "#e35d6a", fontWeight: 700 }}>✗</span> hardcoded-env
            </>,
          )}
          {line(
            1.25 * fps,
            <>
              <span style={{ color: "#e0b14a", fontWeight: 700 }}>⚠</span> complex-locator
            </>,
          )}
          {line(
            1.4 * fps,
            <>
              <span style={{ color: colors.accent, fontWeight: 700 }}>✓</span> no-static-waits
            </>,
          )}
          {line(
            1.65 * fps,
            <span style={{ color: colors.accent, fontWeight: 700 }}>
              Verdict · 3 findings · gate ready
            </span>,
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
