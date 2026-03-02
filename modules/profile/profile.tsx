import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ImageCarouselTeacher from "./components/carousel-teacher";
import FaqAccordion from "./components/faq";
import SambutanKepsek from "./components/sambutan-kepsek";
import VisiMisi from "./components/visi-misi";

export default function ProfileComponent() {
  return (
    <>
      <Navbar />
      <main>
        <SambutanKepsek />
        <ImageCarouselTeacher />
        <VisiMisi />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}
