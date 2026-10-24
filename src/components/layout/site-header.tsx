import { Link, NavLink, useLocation } from "react-router-dom"
import { LayoutGroup, motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"
import { cta, navItems } from "@/content/site"
import { useScrollHeader } from "@/hooks/use-scroll-header"
import { useIsDesktop } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/layout/site-logo"
import { MobileNav } from "@/components/layout/mobile-nav"

export function SiteHeader() {
  const { hidden, scrolled } = useScrollHeader()
  const isDesktop = useIsDesktop()
  const reduced = useReducedMotion() ?? false
  const location = useLocation()
  const path = location.pathname
  const overPhoto =
    !scrolled && (path === "/" || path === "/casacor" || path.startsWith("/projetos/"))

  return (
    <header
      className={cn(
        "fixed z-50 flex items-center justify-between gap-8 transition-[transform,background-color,backdrop-filter,inset,padding] duration-[var(--dur-fast)] ease-[var(--ease-soft)]",
        hidden && "-translate-y-full",
        scrolled
          ? "inset-x-0 top-0 bg-[color-mix(in_srgb,var(--void)_72%,transparent)] px-margin py-5 backdrop-blur-[16px]"
          : "top-6 right-[max(var(--margin),calc((100vw-var(--max-w))/2+var(--margin)))] left-[max(var(--margin),calc((100vw-var(--max-w))/2+var(--margin)))] px-10 py-7 max-lg:top-6 max-lg:right-5 max-lg:left-5 max-lg:px-5 max-lg:py-5",
      )}
    >
      {isDesktop ? (
        <SiteLogo className={cn(overPhoto && "on-photo")} />
      ) : (
        /* A assinatura se escreve da esquerda para a direita, como o traço da caneta.
           A máscara transborda o box para não cortar os floreios da fonte manuscrita. */
        <motion.div
          initial={reduced ? false : { clipPath: "inset(-30% 110% -30% -15%)" }}
          animate={{ clipPath: "inset(-30% -15% -30% -15%)", transitionEnd: { clipPath: "none" } }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
        >
          <SiteLogo className={cn(overPhoto && "on-photo")} />
        </motion.div>
      )}

      {isDesktop ? (
        <>
          <LayoutGroup>
            <nav className="flex gap-1 rounded-pill border border-stroke bg-void/80 p-1.5 backdrop-blur-[16px]">
            {navItems.map((item) => {
              const active =
                item.href === "/projetos"
                  ? location.pathname.startsWith("/projetos")
                  : location.pathname === item.href
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative z-0 rounded-pill px-5 py-2.5 text-[13px] transition-colors duration-[var(--dur-micro)]",
                    active ? "text-invert-text" : "text-text-dim hover:text-text",
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-pill bg-invert"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {item.label}
                </NavLink>
              )
            })}
            </nav>
          </LayoutGroup>

          <Button asChild>
            <Link to="/contato">{cta.startProject}</Link>
          </Button>
        </>
      ) : (
        <div className={cn(overPhoto && "on-photo")}>
          <MobileNav />
        </div>
      )}

      {isDesktop ? null : (
        /* Filete de 1px que varre a base do header quando ele vira barra */
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-stroke"
          initial={false}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={reduced ? { duration: 0 } : { duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </header>
  )
}
