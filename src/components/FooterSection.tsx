import { Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-2">Get in touch</h3>
          <p className="text-sm text-muted-foreground">
            Available for freelance projects and collaborations. Feel free to
            reach out via email.
          </p>
          <a
            href="mailto:nathaniellucero.dev@gmail.com"
            className="inline-flex items-center gap-2 mt-3 text-sm font-medium hover:underline"
          >
            <Mail className="h-4 w-4" />
            nathaniellucero.dev@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
