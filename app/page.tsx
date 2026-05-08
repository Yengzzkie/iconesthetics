import Banner from "@/components/Banner/Banner";
import CallToAction from "@/components/CallToAction/CallToAction";
import FeaturedServices from "@/components/FeaturedServices/FeaturedServices";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-background text-(--text-on-background) font-body-md overflow-x-hidden">
      <main>
        <Hero />

        <FeaturedServices />

        <Banner />

        <CallToAction />
      </main>
    </div>
  );
}
