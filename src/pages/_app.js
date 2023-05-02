import "../styles/globals.css";
import "../styles/general.sass";
import MainLayout from "@/components/layout/main-layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </>
  );
}

export default MyApp;
