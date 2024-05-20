'use client';

import { Result, Root } from '@/types/teams';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TeamWithPosition extends Result {
  position: string;
}

const positions = [
  'Chief Executive Officer (CEO)',
  'Chief Operating Officer (COO)',
  'Chief Marketing Officer (CMO)',
  'Chief Technology Officer (CTO)',
  'Creative Director',
  'Head of Client Services',
];

const Teams = () => {
  const [teams, setTeams] = useState<TeamWithPosition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://randomuser.me/api?results=6');
        const data = (await response.json()) as Root;
        const teamWithPosition = data.results.map((team, index) => ({
          ...team,
          position: positions[index],
        }));
        setTeams(teamWithPosition);
      } catch (error) {
        alert('Failed to fetch teams data');
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  return (
    <section className='my-24 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16'>
        {loading ? (
          <>
            <div className='space-y-4'>
              <div className='w-full max-lg:max-w-sm mx-auto aspect-square bg-neutral-300 rounded-2xl animate-pulse'></div>
              <div className='w-full h-8 bg-neutral-300 rounded-2xl'></div>
            </div>
            <div className='space-y-4'>
              <div className='w-full max-lg:max-w-sm mx-auto aspect-square bg-neutral-300 rounded-2xl animate-pulse'></div>
              <div className='w-full h-8 bg-neutral-300 rounded-2xl'></div>
            </div>
            <div className='space-y-4'>
              <div className='w-full max-lg:max-w-sm mx-auto aspect-square bg-neutral-300 rounded-2xl animate-pulse'></div>
              <div className='w-full h-8 bg-neutral-300 rounded-2xl'></div>
            </div>
            <div className='space-y-4'>
              <div className='w-full max-lg:max-w-sm mx-auto aspect-square bg-neutral-300 rounded-2xl animate-pulse'></div>
              <div className='w-full h-8 bg-neutral-300 rounded-2xl'></div>
            </div>
            <div className='space-y-4'>
              <div className='w-full max-lg:max-w-sm mx-auto aspect-square bg-neutral-300 rounded-2xl animate-pulse'></div>
              <div className='w-full h-8 bg-neutral-300 rounded-2xl'></div>
            </div>
            <div className='space-y-4'>
              <div className='w-full max-lg:max-w-sm mx-auto aspect-square bg-neutral-300 rounded-2xl animate-pulse'></div>
              <div className='w-full h-8 bg-neutral-300 rounded-2xl'></div>
            </div>
          </>
        ) : (
          teams.map((team, index) => (
            <div key={index} className='max-lg:max-w-sm w-full mx-auto'>
              <div className='relative'>
                <Image
                  src={team.picture.large}
                  width={420}
                  height={500}
                  alt='team image'
                  className='rounded-2xl w-full object-cover'
                />
                <div className='absolute top-4 right-4 flex gap-5'>
                  <Link
                    href='https://linkedin.com'
                    className='h-9 w-9 flex items-center justify-center bg-white/50 backdrop-blur hover:backdrop-blur-none rounded-full'
                    aria-label={`go to linkedin account`}>
                    <Linkedin className='size-4' />
                  </Link>
                  <Link
                    href='https://instagram.com'
                    className='h-9 w-9 flex items-center justify-center bg-white/50 backdrop-blur hover:backdrop-blur-none rounded-full'
                    aria-label={`go to instagram account`}>
                    <Instagram className='size-4' />
                  </Link>
                  <Link
                    href='https://facebook.com'
                    className='h-9 w-9 flex items-center justify-center bg-white/50 backdrop-blur hover:backdrop-blur-none rounded-full'
                    aria-label={`go to facebook account`}>
                    <Facebook className='size-4' />
                  </Link>
                </div>
              </div>
              <p className='font-roboto-serif font-semibold text-2xl mt-4 mb-2'>
                {`${team.name.first} ${team.name.last}`}
              </p>
              <p>{team.position}</p>
            </div>
          ))
        )}
        {}
      </div>
    </section>
  );
};

export default Teams;
