import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Framework from "@/components/Framework";
import Domains from "@/components/Domains";
import Ventures from "@/components/Ventures";
import Credibility from "@/components/Credibility";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Framework />
        <Domains />
        <Ventures />
        <Credibility />
        <About />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
