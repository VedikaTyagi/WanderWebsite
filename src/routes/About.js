import Hero from "../Components/hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/4.jpeg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
