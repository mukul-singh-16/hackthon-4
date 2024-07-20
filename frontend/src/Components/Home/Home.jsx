import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Navbarr from "../Navbar/Navbarr";
import Footer from "../Footer/Footer";
import Contact from "../Contact Us/Contact";

let heroSection = {
  backgroundImage:
    'url("https://media.licdn.com/dms/image/C4D12AQE7H9y9DCSNVg/article-cover_image-shrink_720_1280/0/1585739097532?e=2147483647&v=beta&t=8fHb7HuoSfrwW7AjZVDV6wXGPGUpZI7S6ac7mGoI6TI")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  Height: "100vh",
  width: "100%",
};

const Home = () => {
  return (
    <>
      <Navbarr />
      <div style={heroSection}>
        <Hero />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
