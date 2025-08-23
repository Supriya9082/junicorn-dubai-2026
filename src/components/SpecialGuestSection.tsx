import { Star, Award, Lightbulb } from "lucide-react";
const aliImage = "/lovable-uploads/2aade0ed-e9b3-45dc-ba17-fc25e0905c7a.png";

const SpecialGuestSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Special Guest</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-accent">Brand Ambassador</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're honored to have one of the region's most inspiring young innovators leading our summit.
            </p>
          </div>

          {/* Main Guest Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-elegant overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-accent opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-primary opacity-5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Guest Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-30"></div>
                <img
                  src={aliImage}
                  alt="Ali Al Loughani"
                  className="relative rounded-2xl w-full max-w-md mx-auto shadow-elegant"
                />
                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-accent text-white px-4 py-2 rounded-full font-semibold shadow-accent">
                  Brand Ambassador
                </div>
              </div>

              {/* Guest Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Ali Al Loughani</h3>
                  <p className="text-xl text-accent font-semibold mb-4">Youngest Emirati Inventor</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A visionary young innovator who has made significant contributions to the UAE's technology landscape. 
                    Ali represents the spirit of innovation and entrepreneurship that drives the next generation of changemakers.
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovation Leader</h4>
                      <p className="text-sm text-muted-foreground">Recognized for breakthrough technological innovations</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Young Entrepreneur</h4>
                      <p className="text-sm text-muted-foreground">Inspiring the next generation of innovators</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Impact</h4>
                      <p className="text-sm text-muted-foreground">Contributing to UAE's vision for innovation excellence</p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-subtle rounded-2xl p-6 border-l-4 border-accent">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "Innovation knows no age. The future belongs to those who dare to dream and have the courage to turn those dreams into reality."
                  </p>
                  <div className="mt-3 font-semibold text-primary">— Ali Al Loughani</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold mb-4">Join Ali at the Summit</h4>
              <p className="text-muted-foreground mb-6">
                Experience firsthand insights from one of the UAE's most promising young innovators. 
                Ali will be participating in keynote sessions, panel discussions, and networking events throughout the summit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm font-semibold text-primary">Keynote Speaker</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm font-semibold text-accent">Innovation Mentor</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm font-semibold text-primary">Panel Moderator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialGuestSection;