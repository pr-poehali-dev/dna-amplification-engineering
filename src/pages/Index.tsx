import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";

export default function Index() {
  const [activeSection, setActiveSection] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-[#e8e4d9] font-body">
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        onScrollTo={scrollTo}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
      />
      <HeroSection onScrollTo={scrollTo} />
      <ContentSections />
    </div>
  );
}
