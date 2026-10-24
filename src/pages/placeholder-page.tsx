import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

type PlaceholderPageProps = {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="flex min-h-[70vh] flex-col justify-end gap-10 px-margin pt-40 pb-24">
      <h1 className="type-hero max-w-[16ch] text-text">{title}</h1>
      <p className="max-w-[46ch] type-body-lg text-text-dim">{description}</p>
      <Button asChild variant="secondary" className="self-start">
        <Link to="/">Voltar ao início</Link>
      </Button>
    </section>
  )
}
