import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import NavBar from "@/components/navbar";



export default function App({ Component, pageProps }) {

  return (
    <>
      <main style={{ paddingTop: "86px"}}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
