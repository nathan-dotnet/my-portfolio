import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <section className="">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <a
              href="https://github.com/nathan-dotnet"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathaniel-lucero-61b07a2a9/"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/nathan_dotnet?utm_source=qr&igsh=MzNpd2g0enIxcXgz"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/Hokori29"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
