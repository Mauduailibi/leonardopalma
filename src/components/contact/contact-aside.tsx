import { cta } from "@/content/site"
import { contactPage } from "@/content/contact"
import { Button } from "@/components/ui/button"

export function ContactAside() {
  const { aside } = contactPage

  return (
    <aside className="flex flex-col gap-12">
      <div className="flex flex-col border-t border-stroke-hi">
        <span className="type-mono pt-5 pb-2 text-text-mute">{aside.title}</span>
        {aside.items.map((item, index) => (
          <div
            key={item.label}
            className={
              index === aside.items.length - 1
                ? "flex flex-col gap-2 py-4"
                : "flex flex-col gap-2 border-b border-rule py-4"
            }
          >
            <span className="type-mono text-text-mute">{item.label}</span>
            <span className="type-body text-text-dim">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-rule pt-6">
        <span className="type-mono text-text-mute">{aside.socialTitle}</span>
        {aside.social.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            className="border-b border-stroke pb-1.5 type-body text-text transition-[border-color] duration-[var(--dur-micro)] hover:border-corten"
          >
            {item.label}
          </a>
        ))}
      </div>

      <Button asChild variant="secondary" className="w-full">
        <a href="/assets/brand/portfolio.pdf">{cta.downloadPortfolio}</a>
      </Button>
    </aside>
  )
}
