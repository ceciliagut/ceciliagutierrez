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
      <WritingSection />
      <ConnectSection />
    </main>
  );
};

export default Index;
