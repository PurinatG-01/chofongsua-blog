export default (id) => {
  if (!window || !document) return
  const yOffset = -100
  const element = document.querySelector(id)
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: "smooth" })
}
