import CTA from '@/components/CTA';
import AboutUs from '@/components/AboutUs';
import Cultures from '@/components/Cultures';
import Teams from '../../components/Teams';
import Hero from './_components/Hero';
import Achievements from './_components/Achievements';

const AboutPage = () => {
  return (
    <main>
      <Hero />
      <Achievements />
      <AboutUs />
      <Teams />
      <Cultures />
      <CTA />
    </main>
  );
};

export default AboutPage;
