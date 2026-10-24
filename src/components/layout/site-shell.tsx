import { Outlet } from "react-router-dom"
import { CustomCursor } from "@/components/shared/custom-cursor"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

export function SiteShell() {
  return (
    <div className="site-wrap min-h-dvh bg-void">
      <CustomCursor />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
