import { Play, Video } from "lucide-react";

const TeaserVideoSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Video className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Watch Now</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Summit Teaser</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Get a glimpse of what awaits at the most prestigious startup summit in the region. Experience the excitement, innovation, and collaboration that defines ISF Junicorns 2026.
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Now Playing</span>
                </div>
                <div className="text-sm text-muted-foreground">Duration: 2:30</div>
              </div>

              <button 
                onClick={() => document.getElementById('participation')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Register for Summit
              </button>
            </div>

            {/* Video Player */}
            <div>
              <div className="relative group">
                <div className="aspect-video bg-gradient-subtle rounded-2xl overflow-hidden shadow-elegant">
                  <iframe
                    src="https://youtu.be/wmGRwa3e1f0?si=pA7R_IKnIp_1_KN_"
                    title="Junicorn Summit 2026 Teaser"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">2:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaserVideoSection;
