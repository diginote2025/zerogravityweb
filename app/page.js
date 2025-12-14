import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PropertyGrid from "@/components/PropertyGrid";
import UserGuide from "@/components/UserGuide";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import MobilePreview from "@/components/MobilePreview";

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-stone-100">
      <HeroSection />
      <FeaturesGrid />
      <PropertyGrid />
      <UserGuide />
      <StatsSection />
      <ServicesSection />
      <Testimonials />
      <BlogSection />
      <MobilePreview />
    </main>
  );
}
