import { About } from "./components/About/About";
import { Riddler } from "./components/Riddler/Riddler";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { EasterEgg } from "./components/EasterEgg/EasterEgg";
import { Writing } from "./components/Writing/Writing";

export default function Home() {
  return (
    <>
      <About />
      <Writing />
      <Experience />
      <Skills />
      <Riddler />
      <EasterEgg />
    </>
  );
}
