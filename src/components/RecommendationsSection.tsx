const recommendations = [
  {
    quote:
      "Nathaniel was the most talented software engineer I've mentored in a long time. He's a fast learner, and he always makes sure to deliver quality output given a period of time. He is also very keen on learning new technologies, and I find him to be objectively passionate about tech. He's definitely someone you want on your team.",
    name: "Cris Lawrence Adrian Militante",
    role: "ICT Director at GCM",
  },
];

const RecommendationsSection = () => {
  return (
    <section className="">
      <h2 className="text-xl font-bold mb-6">Recommendations</h2>
      <div className="space-y-6">
        {recommendations.map((rec, i) => (
          <div key={i} className="border-l-2 border-border pl-4">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{rec.quote}"
            </p>
            <div className="mt-2">
              <p className="text-sm font-semibold">{rec.name}</p>
              <p className="text-xs text-muted-foreground">{rec.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationsSection;
