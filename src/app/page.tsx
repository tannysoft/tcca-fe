import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Pillars } from "@/components/sections/Pillars";
import { Events } from "@/components/sections/Events";
import { News } from "@/components/sections/News";
import { Partners } from "@/components/sections/Partners";
import { JoinCTA } from "@/components/sections/JoinCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <Events />
      <News />
      <Partners />
      <JoinCTA />
    </>
  );
}
