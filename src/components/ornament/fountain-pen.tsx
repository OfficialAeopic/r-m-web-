/**
 * Fountain pen + open ledger ink-line illustration.
 * Single color via currentColor. Hand-drawn feel.
 */
export function FountainPen({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {/* Open ledger book — left and right pages */}
      <path d="M 40,290 L 320,290" strokeWidth="1.2" />
      <path d="M 60,280 Q 180,260 300,280" />
      <path d="M 60,280 L 60,210" />
      <path d="M 300,280 L 300,210" />
      <path d="M 60,210 Q 120,196 180,210 Q 240,196 300,210" />
      <path d="M 180,210 L 180,278" />

      {/* Left page ruling lines */}
      <path d="M 80,224 L 168,222" strokeWidth="0.8" />
      <path d="M 80,238 L 168,236" strokeWidth="0.8" />
      <path d="M 80,252 L 168,250" strokeWidth="0.8" />
      <path d="M 80,266 L 168,264" strokeWidth="0.8" />

      {/* Right page ruling lines */}
      <path d="M 192,222 L 282,224" strokeWidth="0.8" />
      <path d="M 192,236 L 282,238" strokeWidth="0.8" />
      <path d="M 192,250 L 282,252" strokeWidth="0.8" />
      <path d="M 192,264 L 282,266" strokeWidth="0.8" />

      {/* Right page numerical figures (hand-drawn rectangles for amounts) */}
      <path d="M 220,228 L 250,228 L 250,232 L 220,232 Z" strokeWidth="0.6" />
      <path d="M 220,242 L 260,242 L 260,246 L 220,246 Z" strokeWidth="0.6" />
      <path d="M 220,256 L 245,256 L 245,260 L 220,260 Z" strokeWidth="0.6" />

      {/* Fountain pen, laid diagonally over right page */}
      {/* Pen barrel */}
      <path d="M 140,160 L 250,90 L 268,108 L 158,178 Z" />
      {/* Cap band */}
      <path d="M 226,106 L 244,124" />
      <path d="M 232,102 L 250,120" />
      {/* Pen tip / nib */}
      <path d="M 140,160 L 124,176 L 116,184 L 130,178 L 142,170 Z" />
      <path d="M 130,168 L 124,176" />
      {/* Nib slit */}
      <path d="M 128,174 L 122,182" strokeWidth="0.8" />
      {/* Clip */}
      <path d="M 250,90 L 256,84 L 262,90 L 268,108" />

      {/* Ink drop / spot of ink near pen tip */}
      <circle cx="108" cy="194" r="2.5" fill="currentColor" stroke="none" />
      <path d="M 100,200 L 116,200" strokeWidth="0.6" />
    </svg>
  );
}
