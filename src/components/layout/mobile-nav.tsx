import { useEffect, useRef, useState, type CSSProperties } from "react"
import { Link, useLocation } from "react-router-dom"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { AnimatePresence, motion, useReducedMotion, type Transition } from "motion/react"
import { cn, padIndex } from "@/lib/utils"
import { cta, navItems, siteConfig } from "@/content/site"
import { contactPage } from "@/content/contact"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/layout/site-logo"

/* Vocabulário de movimento — .cursor/design.md §7: máscara, traço, deslocamento. */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
const EASE_IN_OUT_Q = [0.76, 0, 0.24, 1] as const
const EASE_IN = [0.7, 0, 0.84, 0] as const

/* Copia posição e padding do header, para que logo e botão do painel caiam
   exatamente onde estavam — o header não se move, só o que está atrás dele. */
function measureHeader(trigger: HTMLElement | null): CSSProperties | undefined {
  const header = trigger?.closest("header")
  if (!header) return undefined
  const rect = header.getBoundingClientRect()
  const style = getComputedStyle(header)
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    paddingTop: style.paddingTop,
    paddingRight: style.paddingRight,
    paddingBottom: style.paddingBottom,
    paddingLeft: style.paddingLeft,
  }
}

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [frame, setFrame] = useState<CSSProperties>()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion() ?? false
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const tr = (duration: number, delay = 0, ease: Transition["ease"] = EASE_OUT_EXPO): Transition =>
    reduced ? { duration: 0 } : { duration, delay, ease }

  const onOpenChange = (next: boolean) => {
    if (next) setFrame(measureHeader(triggerRef.current))
    setOpen(next)
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger asChild>
        <motion.button
          ref={triggerRef}
          type="button"
          aria-label="Abrir menu"
          className="flex size-11 items-center justify-center rounded-sm border border-stroke text-text"
          initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)", transitionEnd: { clipPath: "none" } }}
          transition={tr(0.64, 0.35)}
        >
          <svg width="18" height="7" viewBox="0 0 18 7" fill="none" aria-hidden="true">
            {/* Dois traços em sentidos opostos, como linhas de prancheta */}
            {[
              { x1: 0, x2: 18, y: 0.5 },
              { x1: 18, x2: 0, y: 6.5 },
            ].map((line, i) => (
              <motion.line
                key={line.y}
                x1={line.x1}
                x2={line.x2}
                y1={line.y}
                y2={line.y}
                stroke="currentColor"
                strokeWidth={1}
                initial={reduced ? false : { pathLength: 0 }}
                animate={{ pathLength: open ? 0 : 1 }}
                transition={open ? tr(0.2, 0, EASE_IN) : tr(0.64, 0.55 + i * 0.07)}
              />
            ))}
          </svg>
        </motion.button>
      </DialogPrimitive.Trigger>

      <AnimatePresence>
        {open ? (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Content forceMount asChild aria-describedby={undefined}>
              <motion.div
                data-lenis-prevent
                className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-void text-text"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)", transition: tr(0.8, 0, EASE_IN_OUT_Q) }}
                exit={{ clipPath: "inset(0 0 100% 0)", transition: tr(0.64, 0.16, EASE_IN_OUT_Q) }}
              >
                <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>

                <div
                  className={cn(
                    "absolute flex items-center justify-between",
                    !frame && "inset-x-0 top-0 p-5",
                  )}
                  style={frame}
                >
                  <SiteLogo onClick={() => setOpen(false)} />
                  <DialogPrimitive.Close asChild>
                    <button
                      type="button"
                      aria-label="Fechar menu"
                      className="flex size-11 items-center justify-center rounded-sm border border-stroke text-text"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        {["M0.5 0.5 L13.5 13.5", "M13.5 0.5 L0.5 13.5"].map((d, i) => (
                          <motion.path
                            key={d}
                            d={d}
                            stroke="currentColor"
                            strokeWidth={1}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1, transition: tr(0.64, 0.42 + i * 0.07) }}
                            exit={{ pathLength: 0, transition: tr(0.2, 0, EASE_IN) }}
                          />
                        ))}
                      </svg>
                    </button>
                  </DialogPrimitive.Close>
                </div>

                <nav
                  className="flex flex-1 flex-col justify-between gap-12 px-margin pb-8"
                  style={{
                    paddingTop:
                      Number(frame?.top ?? 0) + Number(frame?.height ?? 84) + 40,
                  }}
                >
                  <ul className="m-0 flex list-none flex-col p-0">
                    {navItems.map((item, i) => {
                      const active =
                        item.href === "/projetos"
                          ? pathname.startsWith("/projetos")
                          : pathname === item.href
                      const delay = 0.32 + i * 0.06
                      return (
                        <li key={item.href} className="relative">
                          <motion.span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-px origin-left bg-rule"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1, transition: tr(1.1, delay) }}
                            exit={{ scaleX: 0, transition: tr(0.32, 0, EASE_IN) }}
                          />
                          <DialogPrimitive.Close asChild>
                            <Link
                              to={item.href}
                              aria-current={active ? "page" : undefined}
                              className="flex items-baseline gap-5 py-3"
                            >
                              <span className="block overflow-hidden">
                                <motion.span
                                  className="block type-mono text-text-mute"
                                  initial={{ y: "110%" }}
                                  animate={{ y: 0, transition: tr(0.64, delay + 0.04) }}
                                  exit={{ y: "110%", transition: tr(0.32, 0, EASE_IN) }}
                                >
                                  {padIndex(i + 1)}
                                </motion.span>
                              </span>
                              <span className="block overflow-hidden pb-[0.14em]">
                                <motion.span
                                  className={cn(
                                    "block type-display",
                                    active ? "text-text" : "text-text-dim",
                                  )}
                                  initial={{ y: "110%" }}
                                  animate={{ y: 0, transition: tr(0.8, delay) }}
                                  exit={{ y: "110%", transition: tr(0.32, 0, EASE_IN) }}
                                >
                                  {item.label}
                                </motion.span>
                              </span>
                              {active ? (
                                <motion.span
                                  aria-hidden="true"
                                  className="ml-auto h-px w-8 origin-left self-center bg-corten"
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1, transition: tr(0.64, delay + 0.4) }}
                                  exit={{ scaleX: 0, transition: tr(0.2, 0, EASE_IN) }}
                                />
                              ) : null}
                            </Link>
                          </DialogPrimitive.Close>
                        </li>
                      )
                    })}
                  </ul>

                  <motion.div
                    className="flex flex-col gap-6"
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{
                      clipPath: "inset(0% 0 0 0)",
                      transitionEnd: { clipPath: "none" },
                      transition: tr(0.8, 0.7),
                    }}
                    exit={{ clipPath: "inset(100% 0 0 0)", transition: tr(0.32, 0, EASE_IN) }}
                  >
                    <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-rule pt-5 type-mono">
                      <dt className="text-text-mute">Local</dt>
                      <dd className="m-0 text-text-dim">{siteConfig.locationShort}</dd>
                      <dt className="text-text-mute">Coordenadas</dt>
                      <dd className="m-0 text-text-dim">{contactPage.map.coordinatesLabel}</dd>
                    </dl>
                    <DialogPrimitive.Close asChild>
                      <Button asChild className="h-[52px] w-full">
                        <Link to="/contato">{cta.startProject}</Link>
                      </Button>
                    </DialogPrimitive.Close>
                  </motion.div>
                </nav>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}
