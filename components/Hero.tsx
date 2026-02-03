const goalCards = [
  { icon: "💰", label: "GOLD" },
  { icon: "👶", label: "MY CHILD", sublabel: "MY PRIORITY" },
  { icon: "🏖️", label: "Retirement" },
  { icon: "✨", label: "DREAMS" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-24 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              <span className="text-primary">Women-First</span> Mutual Fund
              <br />
              Distribution Platform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mt-6">
              Built for Bharat. Designed for Trust.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="/hero-illustration.jpg"
              alt="Women-focused financial investment platform"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-large"
            />
          </div>

          {/* Goal Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {goalCards.map((card, index) => (
              <div
                key={card.label}
                className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all duration-300 hover:shadow-glow cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <span className="text-3xl md:text-4xl mb-3 block group-hover:animate-float">
                  {card.icon}
                </span>
                <p className="font-semibold text-foreground">{card.label}</p>
                {card.sublabel && (
                  <p className="text-sm text-muted-foreground mt-1">{card.sublabel}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
