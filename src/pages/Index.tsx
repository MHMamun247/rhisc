import CustomCursor from "@/components/CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingElements from "@/components/FloatingElements";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Leadership />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
