export default function getInputValue (form: HTMLFormElement) {
  const elements = Array.from(form.elements)
  const data: { [key: string]: string } = {}
  elements.forEach((el: HTMLInputElement) => {
    if (el.name) data[el.name] = el.value
  })
  return data
}
