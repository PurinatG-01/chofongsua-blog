export default function useTheme() {
  const toggleTheme = () => {
    if (!document) return
    const body = document.body
    const isDarkTheme = body.dataset.theme == "dark"
    if (isDarkTheme) {
      body.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
    } else {
      body.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
    }
  }

  const initTheme = () => {
    if (!document) return
    const body = document.body
    const theme = localStorage.getItem("theme") ?? "light"
    body.setAttribute("data-theme", theme)
  }

  return {
    toggleTheme,
    initTheme,
  }
}
