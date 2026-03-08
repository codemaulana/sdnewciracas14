import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import FaqAccordion from "./components/faq";
import SambutanKepsek from "./components/sambutan-kepsek";
import TeachersLayout from "./components/teacher-layout";
import VisiMisi from "./components/visi-misi";

export default function ProfileComponent() {
  return (
    <>
      <Navbar />
      <main>
        <SambutanKepsek />
        <TeachersLayout  />
        <VisiMisi />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}
