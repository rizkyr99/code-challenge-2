import { Lightbulb, PenTool, Pencil, Volume, Volume1 } from 'lucide-react';

export const services = [
  {
    name: 'Content Marketing',
    description:
      'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic',
    icon: Pencil,
  },
  {
    name: 'Graphic Design',
    description:
      'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.',
    icon: PenTool,
  },
  {
    name: 'Digital Marketing',
    description:
      "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing",
    icon: Volume1,
  },
];

export const cultures = [
  {
    name: 'Innovation',
    description:
      'We foster an environment where creativity and innovation thrive. This commitment to innovation ensures that we deliver cutting-edge solutions that keep our clients ahead of the curve.',
    icon: Lightbulb,
  },
  {
    name: 'Collaboration',
    description:
      'Teamwork and open communication are at the heart of everything we do. Our collaborative approach ensures that we create holistic and effective digital solutions for our clients.',
    icon: Lightbulb,
  },
  {
    name: 'Continuous Learning',
    description:
      'We are committed to the growth and development of our team. This dedication to continuous learning enables us to offer the most current and effective strategies to our clients.',
    icon: Lightbulb,
  },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export const milestones: Milestone[] = [
  {
    year: '2010',
    title: 'The Beginning',
    description:
      'Canvix Digital Agency was founded by a group of passionate tech enthusiasts and digital marketers, starting our journey in a small shared office space.',
    image: '/images/the-beginning.jpg',
  },
  {
    year: '2012',
    title: 'First Major Project',
    description:
      'Completed our first major project for a renowned local business, establishing our reputation for delivering high-quality digital solutions.',
    image: '/images/headquarter.jpg',
  },
  {
    year: '2014',
    title: 'Expansion of Services',
    description:
      'Expanded our service offerings to include comprehensive digital marketing, web development, and branding solutions, broadening our expertise and client base.',
    image: '/images/expansion.jpg',
  },
  {
    year: '2016',
    title: 'The Beginning',
    description:
      'Received our first industry award for excellence in web design, marking a significant achievement and recognition within the digital industry.',
    image: '/images/headquarter.jpg',
  },
  {
    year: '2020',
    title: 'New Headquarters',
    description:
      'PixelWave Digital Agency was founded by a group of passionate tech enthusiasts and digital marketers, starting our journey in a small shared office space.',
    image: '/images/headquarter.jpg',
  },
  {
    year: '2023',
    title: 'Innovative Projects',
    description:
      'Launched several innovative projects incorporating cutting-edge technologies like AI and VR, showcasing our dedication to staying ahead in the digital landscape.',
    image: '/images/innovative.jpg',
  },
];
