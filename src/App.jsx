import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import CourseSection from "./components/CourseSection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CourseSection />
      </main>
    </>
  );
}
