import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
