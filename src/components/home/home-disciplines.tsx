import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { IconButton } from "@/components/shared/icon-button"
import { homeDisciplines } from "@/content/home"

export function HomeDisciplines() {
  return (
    <section className="flex flex-col gap-16 px-margin pt-section">
      <div className="flex items-baseline justify-between gap-8 border-b border-rule pb-6 max-lg:flex-col max-lg:gap-3">
        <h2 className="m-0 type-h2 text-text">{homeDisciplines.title}</h2>
        <span className="type-mono text-text-mute max-lg:hidden">
          {homeDisciplines.kicker}
        </span>
      </div>

      <div className="grid items-center gap-6 max-lg:grid-cols-1 lg:grid-cols-[1fr_1.12fr_1fr]">
        {homeDisciplines.items.map((item) => (
          <Link
            key={item.index}
            to={item.href}
            className={cn(
              "group flex flex-col justify-between rounded-md border p-8 transition-[transform,background-color,border-color] duration-[var(--dur-fast)] ease-[var(--ease-soft)] max-lg:h-auto max-lg:p-6",
              item.inverted
                ? "h-[480px] border-stroke bg-invert px-9 py-9"
                : "h-[420px] border-stroke bg-graphite hover:border-stroke-hi hover:bg-graphite-hi",
              item.offset === "down" && "lg:translate-y-7 lg:hover:translate-y-[22px]",
              item.offset === "up" && "lg:-translate-y-7 lg:hover:-translate-y-[34px]",
            )}
          >
            <div className="flex items-start justify-between">
              <span
                className={cn(
                  "font-display font-extralight leading-[0.9]",
                  item.inverted
                    ? "text-[88px] text-invert-mute"
                    : "text-[80px] text-text-mute max-lg:text-[60px]",
                )}
              >
                {item.index}
              </span>
              <IconButton
                decorative
                label={`Ver ${item.title}`}
                inverted={item.inverted}
              >
                ↗
              </IconButton>
            </div>
            <div className="flex flex-col gap-3.5 max-lg:mt-7">
              <h3
                className={cn(
                  "m-0 font-display font-light tracking-[-0.01em]",
                  item.inverted
                    ? "text-[30px] leading-[1.2] text-invert-text"
                    : "text-[26px] leading-[1.25] text-text max-lg:text-2xl max-lg:leading-[1.2]",
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  "m-0 type-body",
                  item.inverted ? "text-invert-dim" : "text-text-dim",
                )}
              >
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
