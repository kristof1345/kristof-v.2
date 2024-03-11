import "@/styles/globals.scss";
import Header from "./components/Header";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/copy-clients" || router.pathname === "/" ? (
        <></>
      ) : (
        <Header />
      )}
      <Component {...pageProps} />
    </>
  );
}
