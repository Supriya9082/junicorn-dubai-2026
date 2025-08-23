import { Trophy, Users, Presentation, Award, Network, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Presentation,
    title: "70+ Top Junicorns Pitching",
    description: "Breakthrough innovations from the brightest minds across India and UAE, presenting game-changing solutions.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Inspiring Keynotes & Talks",
    description: "World-class speakers sharing insights on AI, Technology, and Disruption shaping tomorrow's landscape.",
    color: "accent"
  },
  {
    icon: Award,
    title: "Student Innovation Showcase",
    description: "Spotlighting tomorrow's changemakers with cutting-edge projects and revolutionary ideas.",
    color: "primary"
  },
  {
    icon: Trophy,
    title: "Best Startup Pitch Awards",
    description: "Recognition and rewards for the most promising startups with potential for global impact.",
    color: "accent"
  },
  {
    icon: Network,
    title: "Exclusive Networking",
    description: "Connect with global mentors, investors, and ecosystem leaders in curated networking sessions.",
    color: "primary"
  },
  {
    icon: MapPin,
    title: "Dubai Cultural Experience",
    description: "Visits to local museums and attractions, experiencing the rich culture and innovation hub of Dubai.",
    color: "accent"
  }
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Event Highlights</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What Makes This Summit <span className="text-gradient-accent">Extraordinary</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience a carefully curated program designed to inspire, connect, and accelerate innovation on a global scale.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const isAccent = highlight.color === "accent";
              
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl ${
                    isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  }`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  } shadow-elegant`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                    isAccent ? 'bg-accent' : 'bg-primary'
                  } opacity-30 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-subtle rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Be Part of the Innovation Revolution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us for two transformative days that will reshape how you think about innovation, technology, and global impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('participation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-glow hover:scale-105 transition-all"
                >
                  Register Now
                </button>
                <button 
                  onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-secondary transition-colors"
                >
                  View Agenda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;