import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <p className="text-sm text-muted-foreground">
            Available for freelance projects and collaborations. Feel free to
            reach out via email.
          </p>
          <a
            href="mailto:nathaniellucero03@gmail.com"
            className="inline-flex items-center gap-2 mt-3 text-sm font-medium hover:underline"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
