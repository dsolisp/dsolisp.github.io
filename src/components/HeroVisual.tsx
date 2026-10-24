/**
 * Full-bleed product visual for the hero — Gavel CLI evidence plane.
 * Not a card: edge-to-edge atmosphere showing the actual product.
 */
export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-cli">
        <div className="hero-cli-chrome">
          <span className="hero-cli-dot" />
          <span className="hero-cli-dot" />
          <span className="hero-cli-dot" />
          <span className="hero-cli-title">gavel · audit</span>
        </div>
        <pre className="hero-cli-body">
          <code>
            <span className="cli-prompt">$</span> npx @dsolisp/gavel audit .
            {'\n'}
            <span className="cli-muted">Framework:</span> Playwright · TypeScript
            {'\n'}
            <span className="cli-muted">Constitution:</span> layered POM · a11y locators · no sleeps
            {'\n\n'}
            <span className="cli-fail">✗</span> brittle-assert{' '}
            <span className="cli-path">tests/checkout.spec.ts:84</span>
            {'\n'}
            <span className="cli-fail">✗</span> hardcoded-env{' '}
            <span className="cli-path">fixtures/urls.ts:12</span>
            {'\n'}
            <span className="cli-warn">⚠</span> complex-locator{' '}
            <span className="cli-path">pages/cart.page.ts:41</span>
            {'\n'}
            <span className="cli-ok">✓</span> no-static-waits{' '}
            <span className="cli-path">suite clean</span>
            {'\n\n'}
            <span className="cli-accent">Verdict</span> · 3 findings · gate ready
            {'\n'}
            <span className="cli-muted">One test. One verdict. Move on.</span>
          </code>
        </pre>
      </div>
    </div>
  )
}
