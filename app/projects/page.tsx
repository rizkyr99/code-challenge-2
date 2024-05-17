import CTA from '@/components/CTA';
import ProjectGrid from '@/components/ProjectGrid';
import React from 'react';

const ProjectsPage = () => {
  return (
    <main>
      <section className='bg-black max-w-7xl mx-auto h-80 flex items-center justify-center rounded-[20px]'>
        <h1 className='text-white font-roboto-serif font-bold text-7xl'>
          Our Portfolio
        </h1>
      </section>
      <section className='my-24'>
        <ProjectGrid />
      </section>
      <CTA />
    </main>
  );
};

export default ProjectsPage;
