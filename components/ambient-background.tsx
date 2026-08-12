export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep navy → purple base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 15% 0%, oklch(0.24 0.09 300) 0%, transparent 55%),' +
            'radial-gradient(120% 90% at 100% 40%, oklch(0.2 0.07 250) 0%, transparent 55%),' +
            'linear-gradient(180deg, oklch(0.15 0.03 290) 0%, oklch(0.12 0.02 280) 100%)',
        }}
      />

      {/* Soft, slow-drifting orbs — felt as depth, not noticed as motion */}
      <div
        className="mc-orb absolute -left-32 -top-32 size-[30rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, oklch(0.5 0.24 305) 0%, transparent 70%)',
        }}
      />
      <div
        className="mc-orb absolute -bottom-40 -right-28 size-[34rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, oklch(0.55 0.16 235) 0%, transparent 70%)',
          animationDelay: '-9s',
        }}
      />
    </div>
  )
}
