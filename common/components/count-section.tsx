"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaUserGraduate,
  FaAward,
} from "react-icons/fa";

interface CountItem {
  id: number;
  label: string;
  count: number;
  icon: any;
}

export default function CountSection() {
  const data: CountItem[] = [
    {
      id: 1,
      label: "Staff & Guru",
      count: 27,
      icon: <FaChalkboardTeacher size={40} />,
    },
    { id: 2, label: "Kelas", count: 16, icon: <FaSchool size={40} /> },
    { id: 3, label: "Siswa", count: 510, icon: <FaUserGraduate size={40} /> },
    { id: 4, label: "Penghargaan", count: 65, icon: <FaAward size={40} /> },
  ];

  return (
    <section className=" md:w-[70%] lg:w-[50%] grid grid-cols-2 gap-6 my-10">
      {data.map((item) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.5,
        });

        return (
          <div
            key={item.id}
            ref={ref}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="mb-2">{item.icon}</div>
            <div>
              {inView && (
                <CountUp
                  end={item.count}
                  duration={5}
                  className=" md:text-3xl font-bold"
                />
              )}
              <h3 className="mt-2 md:text-lg font-bold">{item.label}</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}
