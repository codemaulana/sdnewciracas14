import Navbar from "../navbar/navbar";
import Kegiatan from "./components/kegiatan";
import Keunggulan from "./components/keunggulan";
import RunningText from "./components/running-text";
import AnalogClock from "@/common/components/analog";
import StatisticSekolah from "@/common/layouts/statistik-sekolah";
import Footer from "../footer/footer";
import CaroulselLayout from "./components/carousel-layout";
export default function HomeComponent() {
  return (
    <>
      <Navbar />
      <main>
        <CaroulselLayout/>
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
