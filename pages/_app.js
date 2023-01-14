import Layout from "../components/events/layout/layout";
import Footer from "../components/events/layout/footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
