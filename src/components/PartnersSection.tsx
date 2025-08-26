import { Building2, Handshake, Award, Users } from "lucide-react";

const partnersData = {
  strategicPartners: [
    { name: "Impact Hub Hyderabad", logo: "/lovable-uploads/043bda80-8ec1-471b-a11c-a41061d637a2.png" },
    { name: "IPF (Indian People's Forum)", logo: "/lovable-uploads/05b64bc7-f30b-4199-9671-439c67fb1045.png" }
  ],
  partnerships: [
    { name: "NightBuddies", logo: "/lovable-uploads/4fc6ecdb-4459-4bb5-9b3b-53694fb56ced.png" },
    { name: "Quality Engineering Foundation", logo: "/lovable-uploads/e65473c8-d852-499e-b059-bdc5622461eb.png" }
  ],
  sponsors: [
    { name: "Dr Hiremath", logo: "/lovable-uploads/2aade0ed-e9b3-45dc-ba17-fc25e0905c7a.png" }
  ],
  supportingPartners: [
    { name: "One World One Family", logo: "/lovable-uploads/ae2fd653-1a64-4b69-9414-ade379d4198c.png" },
    { name: "Eminus Global", logo: "/lovable-uploads/087d7526-cddc-4ba1-9347-708fdb1afa2f.png" },
    { name: "The Global Innovation", logo: "/lovable-uploads/0705a482-d054-49db-9b2c-4dbd37a173f8.png" },
    { name: "Saima Labs", logo: "/lovable-uploads/a44925e6-2d0b-47ca-8a3a-eb76d2ce046c.png" }
  ],
  poweredBy: [
    { name: "Mondee", logo: "/lovable-uploads/10234cb2-174d-485d-a3a4-bab6ea354103.png" },
    { name: "Power Mech", logo: "/lovable-uploads/70ca3ae4-1f12-4a53-af82-1ec25ac369e3.png" }
  ]
};

const PartnerGroup = ({ title, partners, icon: Icon, gradient }: {
  title: string;
  partners: Array<{ name: string; logo: string }>;
  icon: any;
  gradient: string;
}) => (
  <div className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-2xl transition-all duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {partners.map((partner, index) => (
        <div key={index} className="flex items-center justify-center p-4 rounded-lg hover:bg-muted transition-colors">
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="w-48 h-48 object-contain rounded-lg bg-white p-4"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0Y4RjlGQSIvPgo8cGF0aCBkPSJNMjQgMTJDMjYuMjA5MSAxMiAyOCAxMy43OTA5IDI4IDE2QzI4IDE4LjIwOTEgMjYuMjA5MSAyMCAyNCAyMEMyMS43OTA5IDIwIDIwIDE4LjIwOTEgMjAgMTZDMjAgMTMuNzkwOSAyMS43OTA5IDEyIDI0IDEyWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTQgMzJMMjQgMjJMMzQgMzJIMTRaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Handshake className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Our Partners</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Ecosystem</span> Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Together with our strategic partners, we're building a global innovation ecosystem that connects ideas with impact.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <PartnerGroup
              title="Strategic Partners"
              partners={partnersData.strategicPartners}
              icon={Building2}
              gradient="bg-gradient-primary"
            />
            
            <PartnerGroup
              title="In Partnership With"
              partners={partnersData.partnerships}
              icon={Handshake}
              gradient="bg-gradient-accent"
            />
            
            <PartnerGroup
              title="Sponsored By"
              partners={partnersData.sponsors}
              icon={Award}
              gradient="bg-gradient-primary"
            />
            
            <PartnerGroup
              title="Supporting Partners"
              partners={partnersData.supportingPartners}
              icon={Users}
              gradient="bg-gradient-accent"
            />
            
            <div className="lg:col-span-2">
              <PartnerGroup
                title="Powered By"
                partners={partnersData.poweredBy}
                icon={Building2}
                gradient="bg-gradient-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;