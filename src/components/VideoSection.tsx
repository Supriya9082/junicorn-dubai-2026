import { Play, Video } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Grand Launch of ISF Junicorns 2026",
    description: "Grand Launch of ISF Junicorns 2026 by global humanitarian leader Sadguru Sri Madhusudan Sai at Muddenahalli - special thanks to our mentor, founder, and global Chairman JA Chowdary Garu We had a very grand launch of ISF Junicorns 2026 with Dr JA Garu, Sathyendra, Ravuri, Padma, Dr Viswanath Hiremath, Dr Karthik Ramesh, and Nishant in the presence of the guest of honor, Dr Abu Abdullah entrepreneur philanthropist, and businessman Emirati community who has agreed to help ISF Junicorns 2026. A lot of UAE residents and Emirati locals were present.",
    thumbnail: "https://via.placeholder.com/640x360/ff6600/ffffff?text=Grand+Launch",
    embedUrl: "https://www.youtube.com/embed/E-Dxt8oDtts", // ✅ fixed
  },
  {
    id: 2,
    title: "Speech by Dr. Karthik Ramesh",
    description: "The speech delivered by  Dr. Karthik Ramesh, President ISF Middle East, on behalf of Dr JA Chowdary is Garu, and the entire ISF Junicorns team.Special thanks to Sadguru for the blessed opportunity. Grand Launch of ISF Junicorns 2026 by global humanitarian leader Sadguru Sri Madhusudan Sai at Muddenahalli - special thanks to our mentor, founder, and global Chairman JA Chowdary Garu.",
    thumbnail: "https://via.placeholder.com/640x360/00cc66/ffffff?text=Speech+Video",
    embedUrl: "https://www.youtube.com/embed/_KZ0YSRGUG8", // ✅ fixed
  }
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Video className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Watch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Event Videos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch the grand launch ceremony and inspiring speeches from the ISF Junicorns 2026 event
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Video Player */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-subtle rounded-2xl overflow-hidden shadow-elegant">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-foreground text-sm font-medium">{video.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Video Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-elegant h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        Video {video.id}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {video.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Join Us at ISF Junicorns 2026
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Be part of this historic summit and witness innovation, entrepreneurship, and collaboration at its finest
              </p>
              <button 
                onClick={() => document.getElementById('participation')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-foreground text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
