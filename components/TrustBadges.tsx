const badges = [
  { emoji: "✅", text: "SEBI Registered" },
  { emoji: "🔐", text: "AMFI Compliant" },
  { emoji: "🏦", text: "100% Secure Platform" },
  { emoji: "💳", text: "Money Goes Directly to Your Bank" },
  { emoji: "👩‍🦰", text: "Women-First Platform" },
  { emoji: "📖", text: "Simple & Transparent" },
  { emoji: "🤝", text: "Real Human Support" },
];

const TrustBadges = () => {
  return (
    <section className="py-8 bg-primary overflow-hidden">
      {/* Left to Right */}
      <div className="mb-4 relative">
        <div className="flex gap-12 animate-scroll-left">
          {[...badges, ...badges, ...badges].map((badge, index) => (
            <div
              key={`ltr-${index}`}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="text-xl">{badge.emoji}</span>
              <span className="text-primary-foreground font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right to Left */}
      <div className="relative">
        <div className="flex gap-12 animate-scroll-right">
          {[...badges, ...badges, ...badges].map((badge, index) => (
            <div
              key={`rtl-${index}`}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="text-xl">{badge.emoji}</span>
              <span className="text-primary-foreground font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
