export default function getData(form, inputs) {
  const data = {}
  inputs.forEach((input) => {
    data[input.name] = form.querySelector(`[name='${input.name}']`)?.value
  })
  return data
}
