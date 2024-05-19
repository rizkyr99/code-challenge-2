import AboutUs from '@/components/AboutUs';
import Hero from './_components/Hero';
import Cultures from '@/components/Cultures';
import Services from '@/components/Services';
import Showcase from '@/components/Showcase';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Cultures />
      <Showcase />
      <Testimonials />
    </main>
  );
}
