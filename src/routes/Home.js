import Destination from "../Components/Destination";
import Hero from "../Components/hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Your Journey Your Story"
        text="Choose your favourite destination"
        buttonText="Travel Name"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
