import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import GallerySection from "@/components/sections/Gallery";
import WritingSection from "@/components/sections/Writing";
import ConnectSection from "@/components/sections/Connect";
import Divider from "@/components/ui/divider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <Divider />
      <WritingSection />
      <ConnectSection />
    </main>
  );
};

export default Index;
