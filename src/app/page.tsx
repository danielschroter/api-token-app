import Image from "next/image";
import styles from "./page.module.css";
import Paragraph from "../components/ui/Paragraph";

import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free API for comparing texts",
};

export default function Home() {
  return (
    <main className="relative h-screen flex justify-center items-center overflow-x-hidden">
      <div className=" container pt-32 max-w-7xl mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            With the text similarity API you can easily determine the similarity
            between two pieces of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API Key
            </Link>
            .
          </Paragraph>

          <div className=" w-full relative max-w-lg  lg:left-1/2 aspect-square lg:absolute  ">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
