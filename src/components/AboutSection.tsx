import { Sparkles, Globe, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">About the Event</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              An <span className="text-gradient">Electrifying Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bringing together the brightest minds and boldest ideas! Over 70+ top Junicorns from India and UAE pitching breakthrough innovations on a global stage.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src="/lovable-uploads/2aade0ed-e9b3-45dc-ba17-fc25e0905c7a.png"
                alt="Innovation Showcase"
                className="relative rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Innovation Platform</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A unique platform where rural innovations meet global impact, connecting changemakers from diverse backgrounds and cultures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Breakthrough Ideas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Witness groundbreaking innovations in AI, sustainability, healthcare, and technology that are reshaping our future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Networking Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Connect with global mentors, investors, and ecosystem leaders in an environment designed for meaningful collaboration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Numbers */}
              <div className="bg-white rounded-2xl p-6 shadow-elegant">
                <h4 className="text-lg font-bold mb-4 text-center">Event Highlights</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">70+</div>
                    <div className="text-sm text-muted-foreground">Junicorns</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">2</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Global</div>
                    <div className="text-sm text-muted-foreground">Mentors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">Awards</div>
                    <div className="text-sm text-muted-foreground">& Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;