import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { navItems } from "@/content/site"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SiteLogo } from "@/components/layout/site-logo"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Abrir menu"
          className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-sm border border-stroke"
        >
          <span className="h-px w-[18px] bg-text" />
          <span className="h-px w-[18px] bg-text" />
        </button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <div className="flex items-center justify-between">
          <SiteLogo size="mobile" />
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Fechar menu"
              className="flex size-11 items-center justify-center rounded-sm border border-stroke text-text"
            >
              ✕
            </button>
          </SheetClose>
        </div>
        <nav className="mt-16 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.06,
                duration: 0.64,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <SheetClose asChild>
                <Link to={item.href} className="type-display block py-2 text-text">
                  {item.label}
                </Link>
              </SheetClose>
            </motion.div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
