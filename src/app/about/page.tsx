import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AboutSection } from "./AboutSection";
import Skills from "./Skills";
console.log("AboutSection:", AboutSection);
export default function About() {
  return (
    <div className="min-h-screen w-auto  bg-black text-white">
      <Navbar />
      <main className=" h-auto mx-auto py-12">
        <AboutSection />
        {/* <Experience /> */}
        <Skills />

      </main>
      <Footer />
    </div>
  );
}
