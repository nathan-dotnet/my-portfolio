const certifications = [
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
      <h2 className="text-xl font-bold mb-6">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="
              inline-block px-3 py-3
              bg-tag text-tag-foreground text-xs font-medium
              transition-all duration-300 ease-out
              hover:-translate-y-0.5
              hover:shadow-[0_6px_14px_rgba(0,0,0,0.06)]
            "
          >
            <h3 className="text-sm font-semibold">{cert.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {cert.issuer}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
