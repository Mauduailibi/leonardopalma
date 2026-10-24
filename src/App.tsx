import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SiteShell } from "@/components/layout/site-shell"
import { HomePage } from "@/pages/home-page"
import { ProjectsPage } from "@/pages/projects-page"
import { ServicesPage } from "@/pages/services-page"
import { CasacorPage } from "@/pages/casacor-page"
import { ContactPage } from "@/pages/contact-page"
import { ProjectPage } from "@/pages/project-page"
import { PlaceholderPage } from "@/pages/placeholder-page"
import { useLenis } from "@/hooks/use-lenis"

export default function App() {
  useLenis()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/:slug" element={<ProjectPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/casacor" element={<CasacorPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route
            path="/privacidade"
            element={
              <PlaceholderPage
                title="Política de Privacidade"
                description="Conteúdo pendente — [Lacuna] texto LGPD."
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
