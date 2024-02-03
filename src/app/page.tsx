import Newsletter from "@/views/Newsletter";
import FeaturesBanner from "@/views/FeaturesBanner";
import HeroBanner from "@/views/HeroBanner";
import EventsBanner from "@/views/EventsBanner";

export default function Home() {
  return (
    <>
    <HeroBanner />
    <EventsBanner />
    <FeaturesBanner />
    <Newsletter />
    </>
  );
}
