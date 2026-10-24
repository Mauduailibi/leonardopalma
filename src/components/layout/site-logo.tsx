import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/content/site"

type SiteLogoProps = {
  className?: string
  size?: "nav" | "footer" | "mobile"
  onClick?: () => void
}

const sizeClass = {
  nav: "text-[44px] leading-none max-lg:text-[32px]",
  footer: "text-[72px] leading-none max-lg:text-[44px]",
  mobile: "text-[32px] leading-none",
}

export function SiteLogo({ className, size = "nav", onClick }: SiteLogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${siteConfig.name} — início`}
      onClick={onClick}
      className={cn(
        "font-script shrink-0 text-text",
        sizeClass[size],
        className,
      )}
    >
      {siteConfig.name}
    </Link>
  )
}
