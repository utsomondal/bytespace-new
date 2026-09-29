import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import CourseSection from "./components/CourseSection";
import CategoryGrid from "./components/CategoryGrid";
import GrowthSection from "./components/GrowthSection";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CourseSection />
        <CategoryGrid />
        <GrowthSection />
      </main>
    </>
  );
}
