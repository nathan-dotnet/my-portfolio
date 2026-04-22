import { Calendar, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import profileImg from "../assets/nathan.png";
import ThemeToggle from "./ThemeToggle";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-start gap-6 pb-6">
      <div className="absolute top-0 right-0">
        <ThemeToggle />
      </div>
      <Image
        src={profileImg}
        alt="Nathaniel Lucero"
        className="w-32 h-32 sm:w-40 sm:h-40 object-cover border-2 border-border"
      />
      <div className="flex-1">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          Nathaniel Lucero
        </h1>
        <div className="flex items-center gap-1.5 mt-1 text-muted-foreground text-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>Zambales, Philippines</span>
        </div>
        <p className="mt-2 text-muted-foreground text-sm">
          Full Stack Developer
        </p>
        <div className="flex mr-4 flex-wrap gap-3 mt-4">
          <a
            href="mailto:nathaniellucero03@gmail.com"
            className="
                      inline-flex items-center gap-2
                      px-4 py-2
                      bg-primary text-primary-foreground
                      text-sm font-medium
                      shadow-sm
                      transition-all duration-300 ease-out
                      hover:-translate-y-0.5
                      hover:shadow-[0_6px_14px_rgba(0,0,0,0.08)]
                    "
          >
            <Calendar className="w-4 h-4" />
            Schedule a Call
          </a>
          <a
            href="mailto:nathaniellucero03@gmail.com"
            className="
                      inline-flex items-center gap-2
                      px-4 py-2
                      border border-border
                      text-sm font-medium
                      bg-background
                      shadow-sm
                      transition-all duration-300 ease-out
                      hover:-translate-y-0.5
                      hover:shadow-[0_6px_14px_rgba(0,0,0,0.06)]
                    "
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
