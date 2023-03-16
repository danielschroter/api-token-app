import Image from "next/image";
import styles from "./page.module.css";
import Paragraph from "../components/ui/Paragraph";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free API for comparing texts",
};

export default function Home() {
  return (
    <main className="relative h-screen flex justify-center items-center overflow-x-hidden">
      {/* <div className=" container  bg-slate-700 pt-32">
        <div className="text-white">Test1 </div>
        <div className="text-white">Test2 </div>
      </div> */}
    </main>
  );
}
