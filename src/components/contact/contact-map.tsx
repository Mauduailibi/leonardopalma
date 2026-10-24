import { useEffect, useRef } from "react"
import type { Map as LeafletMap } from "leaflet"
import { contactPage } from "@/content/contact"

/* Pino no vocabulário do site: ponto, filete de 1px e cartão de vidro */
function pinHtml() {
  const { map } = contactPage
  return `
    <div class="map-pin__card glass">
      <span class="type-mono text-text-dim">${map.pinKicker}</span>
      <span class="map-pin__title">${map.pinTitle}</span>
      <span class="type-mono text-text-mute">${map.pinAddress}</span>
    </div>
    <span class="map-pin__stem"></span>
    <span class="map-pin__dot"></span>
  `
}

export function ContactMap() {
  const { map } = contactPage
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let disposed = false
    let instance: LeafletMap | undefined

    /* Leaflet + OpenStreetMap: sem chave de API nem conta no Google Cloud.
       Carregado só quando a página de contato abre. */
    void Promise.all([import("leaflet"), import("leaflet/dist/leaflet.css")]).then(
      ([{ default: L }]) => {
        if (disposed) return
        const { lat, lng } = map.coordinates
        instance = L.map(el, {
          center: [lat, lng],
          zoom: 17,
          zoomControl: false,
          scrollWheelZoom: false,
          /* No toque, um dedo rola a página; o mapa usa pinça */
          dragging: !L.Browser.mobile,
        })
        instance.attributionControl.setPrefix('<a href="https://leafletjs.com">Leaflet</a>')
        L.control.zoom({ position: "bottomright" }).addTo(instance)
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(instance)
        L.marker([lat, lng], {
          keyboard: false,
          icon: L.divIcon({ className: "map-pin", html: pinHtml(), iconSize: [0, 0] }),
        }).addTo(instance)
      },
    )

    return () => {
      disposed = true
      instance?.remove()
    }
  }, [map])

  return (
    <section className="flex flex-col gap-5 px-margin pt-section">
      <div className="contact-map relative isolate h-[520px] overflow-hidden rounded-xl border border-stroke bg-carbon max-lg:h-[380px]">
        <div
          ref={ref}
          role="region"
          aria-label={`Mapa: ${map.address}`}
          className="absolute inset-0"
        />
      </div>

      <div className="flex justify-between gap-8 type-mono text-text-mute max-sm:flex-col max-sm:gap-3">
        <span>{map.address}</span>
        <span className="flex gap-6">
          <span>{map.coordinatesLabel}</span>
          <a
            href={map.routeHref}
            target="_blank"
            rel="noreferrer"
            className="border-b border-stroke-hi pb-0.5 text-text transition-[border-color] duration-[var(--dur-micro)] hover:border-corten"
          >
            {map.routeLabel} ↗
          </a>
        </span>
      </div>
    </section>
  )
}
