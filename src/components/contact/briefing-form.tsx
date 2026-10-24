import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { MetaChip } from "@/components/shared/meta-chip"
import { UnderlineField } from "@/components/shared/underline-field"
import { contactPage } from "@/content/contact"

type BriefingFormState = {
  name: string
  email: string
  phone: string
  city: string
  projectType: string
  propertyType: string
  area: string
  deadline: string
  message: string
}

const initialState: BriefingFormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  projectType: "Arquitetura",
  propertyType: "",
  area: "",
  deadline: "",
  message: "",
}

export function BriefingForm() {
  const [values, setValues] = useState(initialState)
  const [sent, setSent] = useState(false)
  const { fields } = contactPage

  const set =
    (key: keyof BriefingFormState) =>
    (event: { target: { value: string } }) => {
      setValues((current) => ({ ...current, [key]: event.target.value }))
      setSent(false)
    }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="flex flex-col gap-16" onSubmit={onSubmit}>
      <div className="flex items-center gap-6 border-t border-stroke-hi pt-5">
        <span className="type-mono text-text-dim">{contactPage.formLabel}</span>
        <span className="type-mono ml-auto text-text-mute">
          {contactPage.fieldCount}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-2">
        <UnderlineField
          label={fields.name.label}
          placeholder={fields.name.placeholder}
          autoComplete="name"
          required
          value={values.name}
          onChange={set("name")}
        />
        <UnderlineField
          label={fields.email.label}
          placeholder={fields.email.placeholder}
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={set("email")}
        />
        <UnderlineField
          label={fields.phone.label}
          placeholder={fields.phone.placeholder}
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={set("phone")}
        />
        <UnderlineField
          label={fields.city.label}
          placeholder={fields.city.placeholder}
          autoComplete="address-level2"
          value={values.city}
          onChange={set("city")}
        />

        <fieldset className="col-span-full flex flex-col gap-4">
          <legend className="type-mono text-text-mute">
            {fields.projectType.label}
          </legend>
          <div className="flex flex-wrap gap-2.5">
            {contactPage.projectTypes.map((type) => (
              <MetaChip
                key={type}
                as="button"
                active={values.projectType === type}
                onClick={() =>
                  setValues((current) => ({ ...current, projectType: type }))
                }
              >
                {type}
              </MetaChip>
            ))}
          </div>
        </fieldset>

        <fieldset className="col-span-full flex flex-col gap-4">
          <legend className="type-mono text-text-mute">
            {fields.propertyType.label}
          </legend>
          <div className="flex flex-wrap gap-2.5">
            {contactPage.propertyTypes.map((type) => (
              <MetaChip
                key={type}
                as="button"
                active={values.propertyType === type}
                onClick={() =>
                  setValues((current) => ({
                    ...current,
                    propertyType: current.propertyType === type ? "" : type,
                  }))
                }
              >
                {type}
              </MetaChip>
            ))}
          </div>
        </fieldset>

        <UnderlineField
          label={fields.area.label}
          placeholder={fields.area.placeholder}
          value={values.area}
          onChange={set("area")}
        />
        <UnderlineField
          label={fields.deadline.label}
          placeholder={fields.deadline.placeholder}
          value={values.deadline}
          onChange={set("deadline")}
        />

        <UnderlineField
          multiline
          className="col-span-full"
          label={fields.message.label}
          placeholder={fields.message.placeholder}
          rows={4}
          value={values.message}
          onChange={set("message")}
        />
      </div>

      <div className="flex items-center gap-8 max-lg:flex-col max-lg:items-stretch">
        <Button type="submit">{contactPage.submit}</Button>
        <p className="m-0 type-small text-text-mute">
          {sent ? contactPage.success : contactPage.responseNote}
        </p>
      </div>
    </form>
  )
}
