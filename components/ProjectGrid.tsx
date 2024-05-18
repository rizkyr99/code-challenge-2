import { recentProjects } from '@/data';
import Image from 'next/image';

const ProjectGrid = () => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16'>
      {recentProjects.map((project) => (
        <div key={project.title} className='w-full max-md:max-w-sm mx-auto'>
          <Image
            src={project.image}
            width={640}
            height={426}
            alt='project image'
            className='w-full aspect-[6/4] object-cover rounded-[20px]'
          />
          <p className='font-roboto-serif font-semibold text-xl sm:text-2xl mt-5 mb-2 text-center md:text-left'>
            {project.title}
          </p>
          <p className='text-center md:text-left'>{project.customer}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
