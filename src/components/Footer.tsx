import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Globe } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { label: "About the Event", href: "#about" },
  { label: "Event Highlights", href: "#highlights" },
  { label: "Agenda", href: "#agenda" },
  { label: "Venue", href: "#venue" },
  { label: "Registration", href: "#participation" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Event Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">ISF Junicorn Global Summit 2026</h3>
                <p className="text-primary-foreground/80 mb-4">Dubai Edition</p>
                <p className="text-primary-foreground/70 leading-relaxed max-w-md">
                  Where Rural Innovation meets Global Impact! Join us for an electrifying experience 
                  bringing together the brightest minds and boldest ideas.
                </p>
              </div>

              {/* Event Details */}
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>10th & 11th January 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Manipal Academy, Dubai Campus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Academic City, Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
              
              {/* Social Media */}
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors" />
                    </a>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:karthik@isfnetwork.org"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>karthik@isfnetwork.org</span>
                </a>
                <a
                  href="mailto:padma.alluri@isfnetwork.org"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>padma.alluri@isfnetwork.org</span>
                </a>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <Globe className="w-4 h-4" />
                  <span>isfnetwork.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/60">
                © 2026 ISF Junicorn Global Summit. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
                <span>Powered by ISF Network</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Dubai 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;