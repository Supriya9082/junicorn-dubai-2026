import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Partnerships & Sponsorship",
    contact: "karthik@isfnetwork.org",
    description: "For corporate partnerships, sponsorship opportunities, and strategic collaborations",
    color: "primary"
  },
  {
    icon: MessageCircle,
    title: "Participation & Nominations",
    contact: "padma.alluri@isfnetwork.org",
    description: "For registration, nominations, and general participation inquiries",
    color: "accent"
  }
];

const phoneNumbers = [
  {
    number: "+91 63669 34436",
    region: "India",
    icon: "🇮🇳"
  },
  {
    number: "+971 56 5357046",
    region: "UAE",
    icon: "🇦🇪"
  },
  {
    number: "+1 (408) 784-8595",
    region: "USA",
    icon: "🇺🇸"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Contact Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about the summit? Need assistance with registration? Our team is here to help you every step of the way.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const isAccent = contact.color === "accent";
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 group"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  } shadow-elegant group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {contact.description}
                  </p>
                  
                  <a
                    href={`mailto:${contact.contact}`}
                    className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                      isAccent ? 'text-accent hover:text-accent/80' : 'text-primary hover:text-primary/80'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    {contact.contact}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Phone Numbers */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Call Us Directly</h3>
              <p className="text-muted-foreground">
                Speak with our team for immediate assistance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {phoneNumbers.map((phone, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-3">{phone.icon}</div>
                  <a
                    href={`tel:${phone.number}`}
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  >
                    {phone.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Event Location Reference */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Event Location</h3>
                <p className="text-muted-foreground mb-4">
                  Manipal Academy of Higher Education<br />
                  Dubai Campus, Academic City<br />
                  Dubai, UAE
                </p>
                <div className="text-sm text-muted-foreground">
                  <div className="mb-1"><strong>Dates:</strong> 10th & 11th January 2026</div>
                  <div><strong>Time:</strong> 9:00 AM - 6:00 PM</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Quick Links</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => document.getElementById('participation')?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-left px-4 py-3 bg-gradient-subtle rounded-lg hover:bg-secondary transition-colors"
                  >
                    Registration Information
                  </button>
                  <button 
                    onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-left px-4 py-3 bg-gradient-subtle rounded-lg hover:bg-secondary transition-colors"
                  >
                    Event Agenda
                  </button>
                  <button 
                    onClick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-left px-4 py-3 bg-gradient-subtle rounded-lg hover:bg-secondary transition-colors"
                  >
                    Venue Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Note */}
          <div className="mt-8 text-center">
            <div className="bg-accent/10 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="font-semibold text-accent mb-2">Need Immediate Assistance?</h4>
              <p className="text-sm text-muted-foreground">
                For urgent inquiries during the event, please call our 24/7 helpline or visit the registration desk at the venue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;