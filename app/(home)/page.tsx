import AboutUs from './_components/AboutUs';
import Hero from './_components/Hero';
import Process from './_components/Process';
import Services from './_components/Services';
import Showcase from './_components/Showcase';
import Testimonials from './_components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <Showcase />
      <Testimonials />
    </main>
  );
}
