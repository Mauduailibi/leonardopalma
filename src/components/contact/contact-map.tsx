import { GlassCard } from "@/components/shared/glass-card"
import { contactPage } from "@/content/contact"

export function ContactMap() {
  const { map } = contactPage

  return (
    <section className="flex flex-col gap-5 px-margin pt-section">
      <div className="relative h-[520px] overflow-hidden rounded-xl border border-stroke bg-[#050506] max-lg:h-[380px]">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 84px), repeating-linear-gradient(0deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 84px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(104deg, transparent 34%, rgba(255,255,255,0.05) 34%, rgba(255,255,255,0.05) 36%, transparent 36%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-[64%] right-0 left-0 h-px bg-text/8"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(38% 46% at 46% 52%, color-mix(in srgb, var(--ember) 8%, transparent), transparent 70%)",
          }}
        />

        <div className="absolute top-1/2 left-[46%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-2.5">
          <span className="h-14 w-px bg-stroke-hi" />
          <GlassCard className="flex flex-col gap-1.5 rounded-md px-[22px] py-[18px]">
            <span className="type-mono text-text-dim">{map.pinKicker}</span>
            <span className="font-display text-2xl tracking-[-0.01em] whitespace-nowrap font-light text-text">
              {map.pinTitle}
            </span>
            <span className="type-mono text-text-mute">{map.pinAddress}</span>
          </GlassCard>
        </div>

        <span className="absolute top-7 left-8 type-mono text-text-mute">
          {map.caption}
        </span>
      </div>

      <div className="flex justify-between gap-8 type-mono text-text-mute max-sm:flex-col">
        <span>{map.footerLeft}</span>
        <span>{map.footerRight}</span>
      </div>
    </section>
  )
}
