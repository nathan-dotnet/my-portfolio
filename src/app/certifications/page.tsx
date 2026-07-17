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

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-primary transition hover:text-primary/80"
            >
              ← Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Certifications</h1>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4 bg-white/90 p-8 shadow-sm backdrop-blur dark:bg-zinc-950/80">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-md border border-zinc-200 bg-white/90 px-4 py-4 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100"
            >
              <h2 className="text-base font-semibold">{cert.name}</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {cert.issuer}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
