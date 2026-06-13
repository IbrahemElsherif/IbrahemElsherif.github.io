import { Navbar } from "@/components/navbar";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
