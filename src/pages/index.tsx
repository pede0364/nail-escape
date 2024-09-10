import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Recommend from "../components/Recommend";
import Resume from "../components/Resume";

{
  /* home page */
}
export default function Home() {
  return (
    <>
      <body>
        <About />
        <Resume />
        <Portfolio />
        <Recommend />
        <Contact />
      </body>
    </>
  );
}
