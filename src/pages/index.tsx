import Head from "next/head";
import { Landing } from "@/modules/landing";
import { Footer } from "@/modules/footer";

export default function Home() {
  return (
    <>
    <Head>
      <title>Tasky</title>
      <meta name="description" content="Keep your tasks in one place and make time for focused work." />
    </Head>
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Landing />
      </main>
      <Footer />
    </div>
    </>
  );
}
