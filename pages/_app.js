import "../styles/index.scss";
import "../styles/nav.scss";
import "../styles/home.scss";
import "../styles/carousel.scss";
import "../styles/companyNews.scss";
import "../styles/partnership.scss";
import "../styles/contact.scss";
import "remixicon/fonts/remixicon.css";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        html {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
