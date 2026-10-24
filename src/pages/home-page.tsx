import { HomeCasacor } from "@/components/home/home-casacor"
import { HomeCta } from "@/components/home/home-cta"
import { HomeDefines } from "@/components/home/home-defines"
import { HomeDisciplines } from "@/components/home/home-disciplines"
import { HomeFeatured } from "@/components/home/home-featured"
import { HomeHero } from "@/components/home/home-hero"
import { HomeManifesto } from "@/components/home/home-manifesto"
import { HomeProcess } from "@/components/home/home-process"

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeManifesto />
      <HomeDisciplines />
      <HomeDefines />
      <HomeFeatured />
      <HomeCasacor />
      <HomeProcess />
      <HomeCta />
    </>
  )
}
