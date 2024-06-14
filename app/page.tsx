import Hero from "@/components/Hero";
import ViewReports from "@/components/ViewReports";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const navItems = [
    {
      name: "Find Doctor",
      link: "#findDoc",
    },
    {
      name: "Reports",
      link: "#reports",
    },
    {
      name: "Serivces",
      link: "#services",
    },
    {
      name: "Mission",
      link: "#mission",
    },
  ];

  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero />
      <ViewReports />
      <Services />
      <Mission />
      <Footer />
    </main>
  );
}
