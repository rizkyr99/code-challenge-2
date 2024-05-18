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
    image: '/images/project2.jpg',
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
    title: 'Industry Recognition',
    description:
      'Received our first industry award for excellence in web design, marking a significant achievement and recognition within the digital industry.',
    image: '/images/the-beginning.jpg',
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

export const recentProjects = [
  {
    title: 'E-commerce Website Redesign',
    service: 'Web Development',
    customer: 'ABC Retail Inc.',
    image: '/images/project1.jpg',
  },
  {
    title: 'Brand Identity Refresh',
    service: 'Branding',
    customer: 'XYZ Corp.',
    image: '/images/project2.jpg',
  },
  {
    title: 'Mobile App Development',
    service: 'App Development',
    customer: 'Mobile Solutions Ltd.',
    image: '/images/project3.jpg',
  },
  {
    title: 'Digital Marketing Campaign',
    service: 'Digital Marketing',
    customer: 'Marketing Innovations LLC',
    image: '/images/project4.jpg',
  },
];

export const testimonials = [
  {
    name: 'Emily Johnson',
    position: 'Marketing Director',
    company: 'PixelWave Digital Agency',
    image: '/images/testimonial1.jpg',
    content:
      'Working with the team at PixelWave has been an absolute pleasure. Their innovative approach to digital marketing has significantly boosted our online presence and helped us reach new heights.',
  },
  {
    name: 'Michael Lee',
    position: 'CEO',
    company: 'Tech Solutions Ltd.',
    image: '/images/testimonial2.jpg',
    content:
      'I highly recommend Tech Solutions Ltd. for their exceptional service and expertise in web development. Their attention to detail and dedication to client satisfaction are truly commendable.',
  },
  {
    name: 'Sarah Patel',
    position: 'Founder & CEO',
    company: 'Startup Innovations Inc.',
    image: '/images/testimonial3.jpg',
    content:
      'Startup Innovations Inc. owes much of its success to the talented team at Tech Innovations Inc. Their app development services have been instrumental in bringing our vision to life.',
  },
];
