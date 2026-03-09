const certifications = [
  { name: "Huawei Developer Expert", issuer: "Huawei" },
  { name: "Generative AI Leader", issuer: "Google" },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
  },
];

const CertificationsSection = () => {
  return (
    <section className="">
      <h2 className="text-xl font-bold mb-6">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="
      inline-block px-3 py-1
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
