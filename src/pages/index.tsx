import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Landing } from "@/modules/landing";
import { Footer } from "@/modules/footer";

export default function Home() {
  return (
    <>
    <Head>
      <title>Task Timer</title>
    </Head>
    <Landing />
    <Footer />
    </>
  );
}
