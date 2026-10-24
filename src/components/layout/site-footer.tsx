import { Link } from "react-router-dom"
import { cta, navItems, siteConfig } from "@/content/site"
import { getFooterProjects } from "@/content/projects"
import { SiteLogo } from "@/components/layout/site-logo"

export function SiteFooter() {
  const projects = getFooterProjects()

  return (
    <footer className="mt-40 flex flex-col gap-24 px-margin pb-10 pt-24">
      <div className="grid gap-16 border-t border-stroke pt-16 max-lg:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5 max-lg:col-span-2">
          <SiteLogo size="footer" />
          <span className="text-body tracking-[0.18em] text-text-dim">
            {siteConfig.tagline}
          </span>
          <span className="type-mono text-text-mute">{siteConfig.location}</span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="type-mono text-text-mute">Navegação</span>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-body text-text-dim transition-colors duration-[var(--dur-micro)] hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="type-mono text-text-mute">Projetos</span>
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projetos/${project.slug}`}
              className="text-body text-text-dim transition-colors duration-[var(--dur-micro)] hover:text-text"
            >
              {project.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="type-mono text-text-mute">Contato</span>
          <span className="text-body text-text-dim">{siteConfig.contact.email}</span>
          <span className="text-body text-text-dim">{siteConfig.contact.phone}</span>
          <span className="text-body text-text-dim">{siteConfig.contact.address}</span>
          <a
            href={siteConfig.contact.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="self-start text-body text-text-dim transition-colors duration-[var(--dur-micro)] hover:text-text"
          >
            {siteConfig.contact.instagram}
          </a>
          <a
            href="/assets/brand/portfolio.pdf"
            className="text-underline-hover mt-2 self-start text-body text-text"
          >
            {cta.downloadPortfolio}
          </a>
        </div>
      </div>

      <div className="flex justify-between gap-8 border-t border-rule pt-7 type-mono text-text-mute max-sm:flex-col">
        <span>© {siteConfig.name}</span>
        <div className="flex gap-10">
          <Link
            to="/privacidade"
            className="text-text-mute transition-colors duration-[var(--dur-micro)] hover:text-text-dim"
          >
            Política de Privacidade
          </Link>
          <span>Crédito de desenvolvimento</span>
        </div>
      </div>
    </footer>
  )
}
