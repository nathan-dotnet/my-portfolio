import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div
    className="
      p-4 bg-white dark:bg-zinc-950
      shadow-sm
      transition-all duration-300 ease-out
      hover:-translate-y-px
      hover:shadow-[0_3px_7px_rgba(0,0,0,0.05)]
    "
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-10">
        <HeroSection />

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 mt-8">
          {/* Left Column */}
          <div className="space-y-6">
            <Card>
              <AboutSection />
            </Card>

            <Card>
              <TechStackSection />
            </Card>

            <Card>
              <CertificationsSection />
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card>
              <ExperienceSection />
            </Card>

            <Card>
              <ProjectsSection />
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <Card>
            <FooterSection />
          </Card>
        </div>
      </div>
    </main>
  );
}
