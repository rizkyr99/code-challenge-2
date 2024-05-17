import Image from 'next/image';

const ProjectGrid = () => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-2 gap-16'>
      {[1, 2, 3, 4].map((project, index) => (
        <div key={index} className=''>
          <Image
            src='/images/project1.jpg'
            width={640}
            height={426}
            alt='project image'
            className='w-full aspect-[6/4] object-cover rounded-[20px]'
          />
          <p className='font-roboto-serif font-semibold text-2xl mt-5 mb-2'>
            Web UI Design
          </p>
          <p>Creative UI Design</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
