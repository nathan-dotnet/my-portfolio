import Link from "next/link";

const certifications = [
  {
    name: "Foundational C# with Microsoft",
    issuer: "FreeCodeCamp / Microsoft",
    url: "https://www.freecodecamp.org/certification/nathan-dotnet/foundational-c-sharp-with-microsoft",
  },
  {
    name: "ASP.NET CORE MVC",
    issuer: "TestDome",
    url: "https://www.testdome.com/certificates/cfaddf981560460d8b1524149a154914",
  },
  {
    name: "SQL",
    issuer: "TestDome",
    url: "https://www.testdome.com/certificates/66c4575310ac487c90c6f9b43330868d",
  },
  {
    name: "Python",
    issuer: "TestDome",
    url: "https://www.testdome.com/certificates/98548ef66acd47d6a65cc544598a3a1d",
  },
  {
    name: "JavaScript",
    issuer: "TestDome",
    url: "https://www.testdome.com/certificates/9ef9a171150746639ee056649915f191",
  },
];

const CertificationsSection = () => {
  return (
    <section className="">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold">Certifications</h2>
        <Link
          href="/certifications"
          className="text-sm font-medium text-primary transition hover:text-primary/80"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {certifications.slice(0, 4).map((cert) => (
          <a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-3 py-3 bg-tag text-tag-foreground text-xs font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-sm font-semibold">{cert.name}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {cert.issuer}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
