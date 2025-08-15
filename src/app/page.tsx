import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
    <Nav />
    <Header />
    <Intro />
    <Experience />
    <Portfolio />
    <Footer />
    </>
  );
}
