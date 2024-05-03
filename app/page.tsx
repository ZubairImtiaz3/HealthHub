import Hero from "@/components/Hero";
import FindDoc from "@/components/FindDoc";
import ViewReports from "@/components/ViewReports";
import Services from "@/components/Services";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <main>
      <Hero />
      <FindDoc />
      <ViewReports />
      <Services />
      <Mission />
    </main>
  );
}
