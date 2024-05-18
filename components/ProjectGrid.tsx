import { recentProjects } from '@/data';
import Image from 'next/image';

const ProjectGrid = () => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-2 gap-16'>
      {recentProjects.map((project) => (
        <div key={project.title} className=''>
          <Image
            src={project.image}
            width={640}
            height={426}
            alt='project image'
            className='w-full aspect-[6/4] object-cover rounded-[20px]'
          />
          <p className='font-roboto-serif font-semibold text-2xl mt-5 mb-2'>
            {project.title}
          </p>
          <p>{project.customer}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
