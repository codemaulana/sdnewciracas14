import { getTeachers } from "@/common/service/guru";
import CarouselImage from "./carousel-teacher";

export default async function TeachersLayout() {
  const dataGuru = await getTeachers();

  return <CarouselImage dbTeachers={dataGuru} />;
}
