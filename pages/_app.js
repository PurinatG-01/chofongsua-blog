import "../styles/globals.css"
import Layout from "../layout/default"

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
