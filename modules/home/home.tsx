import Carousel from "@/common/components/carousel-header";
import Navbar from "../navbar/navbar";
import Kegiatan from "./components/kegiatan";
import Keunggulan from "./components/keunggulan";
import { imagesCarousel } from "@/common/lib/item";
import RunningText from "./components/running-text";
import AnalogClock from "@/common/components/analog";
import StatisticSekolah from "@/common/layouts/statistik-sekolah";
import Footer from "../footer/footer";
export default function HomeComponent() {
  return (
    <>
      <Navbar />
      <main>
        <Carousel images={imagesCarousel} />
        <RunningText />
        <AnalogClock />
        <StatisticSekolah />
        <Keunggulan />
        <Kegiatan />
      </main>
      <Footer />
    </>
  );
}
