import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Services from "../components/Services";

{
  /* home page */
}
export default function Home() {
  return (
    <>
      <body>
        <About />
        <Services />
        <Gallery />
        <Contact />
      </body>
    </>
  );
}
