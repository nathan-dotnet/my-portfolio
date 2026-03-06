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
          <div key={cert.name} className="p-4 rounded-lg border border-border">
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
