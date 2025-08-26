import { Button } from "@/components/ui/button";
import { User, Lightbulb, Users, DollarSign, ArrowRight } from "lucide-react";

const participationOptions = [
  {
    icon: User,
    title: "As a Delegate",
    description: "Join industry leaders, investors, and ecosystem builders for networking and learning opportunities.",
    features: [
      "Access to all sessions and presentations",
      "Networking opportunities with global leaders",
      "Exhibition hall access",
      "Welcome kit and refreshments"
    ],
    color: "primary",
    cta: "Register as Delegate",
    qrCode: "/lovable-uploads/043bda80-8ec1-471b-a11c-a41061d637a2.png",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScKQiqKoL_I2fxpsmQT_egWN3H0fK5cPjwIoQfInaVOnYrJlw/viewform?usp=sharing&ouid=113096482238094534521"
  },
  {
    icon: Lightbulb,
    title: "School Student Innovator",
    description: "Showcase your breakthrough innovations and compete for recognition in the student showcase.",
    features: [
      "Pitch presentation opportunity",
      "Mentorship sessions",
      "Innovation showcase participation",
      "Student networking events"
    ],
    color: "accent",
    cta: "Apply as Innovator",
    qrCode: "/lovable-uploads/0705a482-d054-49db-9b2c-4dbd37a173f8.png",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdUKVTmS7_jiigqY2_z-KogWSZZM93J4SMNXub7OChIhtQEnA/viewform?usp=sharing&ouid=113096482238094534521"
  },
  {
    icon: Users,
    title: "College Student Innovator",
    description: "Share your expertise and guide the next generation of innovators and entrepreneurs.",
    features: [
      "VIP access to all sessions",
      "Mentor networking dinner",
      "Speaking opportunities",
      "Recognition as ecosystem leader"
    ],
    color: "primary",
    cta: "Register as Student",
    qrCode: "/lovable-uploads/a2cb584b-9c09-4f73-bab5-fdb52a5708b3.png",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfMSrdcUHxrRthqWrngH4pZWz5J-EDBFBlSXnfkulagoew9sg/viewform?usp=dialog"
  },
  {
    icon: DollarSign,
    title: "Partners & Sponsors Registration",
    description: "Connect with promising startups and discover investment opportunities in early-stage innovations.",
    features: [
      "Exclusive investor sessions",
      "Startup pitch deck access",
      "Due diligence workshops",
      "Investment networking events"
    ],
    color: "accent",
    cta: "Join as Partner",
    qrCode: "/lovable-uploads/493434ed-80b6-48fa-abcc-c520d85b99d8.png",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScU1rBF91QhSQLO_hcLTR_Ef8Cj3UAfR28eM85pVFl2wg_eTA/viewform?usp=sharing&ouid=113096482238094534521"
  },
  {
    icon: Users,
    title: "Guests & Dignitaries Registration",
    description: "Special registration for distinguished guests, dignitaries, and VIP attendees to the summit.",
    features: [
      "VIP access to all sessions",
      "Special networking events",
      "Priority seating arrangements",
      "Exclusive meet and greet opportunities"
    ],
    color: "primary",
    cta: "Register as Guest",
    qrCode: "/lovable-uploads/bcdc3396-1082-4ec1-83cb-1b80340a0ca1.png",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfLEJhddSvBkCisZoR0Dbw84pFmhjtBbgTT_DFHN6CfThUsaA/viewform?usp=sharing&ouid=113096482238094534521"
  }
];

const ParticipationSection = () => {
  return (
    <section id="participation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Join the Summit</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose Your <span className="text-gradient-accent">Participation Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Multiple ways to be part of this transformative innovation experience. Select the option that best fits your goals and expertise.
            </p>
          </div>

          {/* Participation Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {participationOptions.map((option, index) => {
              const Icon = option.icon;
              const isAccent = option.color === "accent";
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${
                    isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  }`}></div>
                  
                  {/* Header */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                      isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'
                    } shadow-elegant group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {option.description}
                    </p>

                    {/* QR Code */}
                    <div className="flex justify-center mb-4">
                      <img
                        src={option.qrCode}
                        alt={`QR Code for ${option.title}`}
                        className="w-24 h-24 rounded-lg border border-border/20"
                      />
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {option.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            isAccent ? 'bg-accent' : 'bg-primary'
                          }`}></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      variant={isAccent ? "accent" : "default"}
                      size="sm"
                      className="w-full group/btn"
                      onClick={() => window.open(option.registrationUrl, '_blank')}
                    >
                      {option.cta}
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Registration Process */}
          <section id="registration" className="bg-gradient-subtle rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to <span className="text-gradient">Register?</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Join us for this extraordinary summit and be part of shaping the future of innovation. 
                Registration is simple and secure.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Choose Your Path</h4>
                  <p className="text-sm text-muted-foreground">
                    Select your participation category from the options above
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Complete Registration</h4>
                  <p className="text-sm text-muted-foreground">
                    Fill out the registration form with your details
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Join the Summit</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive confirmation and prepare for an amazing experience
                  </p>
                </div>
              </div>

              {/* Main CTA */}
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('participation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Register Now for ISF Junicorn 2026
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Early bird registration available. Limited seats - secure your spot today!
              </p>
            </div>
          </section>

          {/* Benefits Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">70+</div>
              <div className="text-sm text-muted-foreground">Startup Pitches</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Global</div>
              <div className="text-sm text-muted-foreground">Networking</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Days of Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Dubai</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;
