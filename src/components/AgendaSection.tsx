import { Calendar, Users, Award, Heart } from "lucide-react";

const agendaItems = [
  {
    icon: Calendar,
    title: "Global Pitch Showcase",
    description: "70+ Junicorns presenting breakthrough innovations across AI, sustainability, healthcare, and technology sectors.",
    color: "primary",
    time: "Day 1 & 2"
  },
  {
    icon: Users,
    title: "Innovation Roundtable",
    description: "Interactive sessions with global mentors, investors, and ecosystem leaders discussing market trends and opportunities.",
    color: "accent",
    time: "Day 1"
  },
  {
    icon: Award,
    title: "Fellowship Launch",
    description: "Official launch of the ISF Innovation Fellowship program with exclusive opportunities for selected participants.",
    color: "primary",
    time: "Day 2"
  },
  {
    icon: Heart,
    title: "Healthcare Conference",
    description: "Dedicated track focusing on healthcare innovations, medical technology, and solutions for global health challenges.",
    color: "accent",
    time: "Day 2"
  }
];

const AgendaSection = () => {
  return (
    <section id="agenda" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Event Agenda</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Two Days of <span className="text-gradient">Innovation Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive program designed to maximize learning, networking, and innovation opportunities.
            </p>
          </div>

          {/* Agenda Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

            <div className="space-y-12">
              {agendaItems.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                const isAccent = item.color === "accent";

                return (
                  <div key={index} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 group">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'
                          }`}>
                            <Icon className={`w-6 h-6 ${isAccent ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                          </div>
                          <div className="flex-1">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                              isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                            }`}>
                              {item.time}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="w-2/12 flex justify-center">
                      <div className={`w-4 h-4 rounded-full relative z-10 ${
                        isAccent ? 'bg-accent' : 'bg-primary'
                      } shadow-lg`}>
                        <div className={`absolute inset-0 rounded-full animate-ping ${
                          isAccent ? 'bg-accent' : 'bg-primary'
                        } opacity-30`}></div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-xl font-bold mb-4 text-primary">Day 1 Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Opening ceremony with keynote speakers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Innovation pitch sessions (35+ startups)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Networking lunch and exhibitions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Innovation roundtable discussions
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-xl font-bold mb-4 text-accent">Day 2 Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Healthcare innovation conference
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Final pitch presentations (35+ startups)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Fellowship program launch
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Awards ceremony and closing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;