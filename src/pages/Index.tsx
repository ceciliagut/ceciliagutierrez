import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import GallerySection from "@/components/sections/Gallery";
import WritingSection from "@/components/sections/Writing";
import ConnectSection from "@/components/sections/Connect";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 md:pt-16"><hr className="border-border" /></div>
      <WritingSection />
      <ConnectSection />
    </main>
  );
};

export default Index;
