import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import WritingSection from "@/components/WritingSection";
import ConnectSection from "@/components/ConnectSection";

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
