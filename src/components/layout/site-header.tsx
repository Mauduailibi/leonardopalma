import { Link, NavLink, useLocation } from "react-router-dom"
import { LayoutGroup, motion } from "motion/react"
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
  const location = useLocation()

  return (
    <header
      className={cn(
        "fixed z-50 flex items-center justify-between gap-8 transition-[transform,background-color,backdrop-filter,inset,padding] duration-[var(--dur-fast)] ease-[var(--ease-soft)]",
        hidden && "-translate-y-full",
        scrolled
          ? "inset-x-0 top-0 bg-[color-mix(in_srgb,var(--void)_72%,transparent)] px-margin py-5 backdrop-blur-[16px]"
          : "top-6 right-margin left-margin px-10 py-7 max-lg:top-3 max-lg:right-5 max-lg:left-5 max-lg:px-2 max-lg:py-3",
      )}
    >
      <SiteLogo />

      {isDesktop ? (
        <>
          <LayoutGroup>
            <nav className="flex gap-1 rounded-pill border border-stroke bg-void/24 p-1.5 backdrop-blur-[16px]">
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
        <MobileNav />
      )}
    </header>
  )
}
