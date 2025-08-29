import { MapPin, Building, Wifi, Car, Coffee, Users } from "lucide-react";

const manipalImage = "/lovable-uploads/087d7526-cddc-4ba1-9347-708fdb1afa2f.png";

const venueFeatures = [
  {
    icon: Building,
    title: "Modern Facilities",
    description: "State-of-the-art conference facilities with cutting-edge technology"
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Reliable connectivity for all participants and live streaming"
  },
  {
    icon: Car,
    title: "Easy Access",
    description: "Convenient location in Academic City with ample parking"
  },
  {
    icon: Coffee,
    title: "Catering Services",
    description: "Premium dining options and networking refreshments"
  },
  {
    icon: Users,
    title: "Networking Spaces",
    description: "Dedicated areas for meaningful connections and discussions"
  }
];

const VenueSection = () => {
  return (
    <section id="venue" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Event Venue</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              World-Class <span className="text-gradient">Venue</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience innovation in the heart of Dubai's Academic City, at one of the region's premier educational institutions.
            </p>
          </div>

          {/* Main Venue Info */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant mb-12">
            {/* Venue Image */}
            <div className="mb-8">
              <img
                src={manipalImage}
                alt="Manipal Academy of Higher Education - Dubai Campus"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-elegant"
              />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Venue Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Manipal Academy of Higher Education
                  </h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-semibold mb-1">Dubai Campus</p>
                      <p className="text-muted-foreground">
                        Academic City, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">About the Venue</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Located in the prestigious Academic City of Dubai, Manipal Academy offers world-class facilities 
                    perfect for hosting international innovation summits. The campus provides an inspiring environment 
                    that fosters learning, collaboration, and breakthrough thinking.
                  </p>
                </div>

                {/* Event Dates */}
                <div className="bg-gradient-subtle rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Event Schedule</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-semibold">10th & 11th January 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">2 Days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative">
                <div className="bg-gradient-primary rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                  {/* Map placeholder with styling */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0536598641147!2d55.375!3d25.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5b5c5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sAcademic%20City%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1624001234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm font-semibold text-foreground">Summit Location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {venueFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Transportation Info */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant">
            <h3 className="text-xl font-bold mb-6">Getting to the Venue</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">By Car</h4>
                <p className="text-sm text-muted-foreground">
                  15 minutes from Dubai International Airport
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Public Transport</h4>
                <p className="text-sm text-muted-foreground">
                  Well-connected by Dubai Metro and bus services
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Hotel Proximity</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple hotels within 10km radius
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;