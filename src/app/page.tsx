import Image from "next/image";
import maintenance from "../../public/maintenance.jpg";

export default function Home() {
  return (
    <main className='flex h-svh flex-col md:pt-10'>
      <div className='flex-1 flex flex-col items-center'>
        <Image
          src={maintenance}
          alt='Under maintenance image'
          width={500}
          height={500}
          priority
          placeholder='blur'
        />

        <div className='space-y-4 text-center px-2.5 md:p-0'>
          <h1 className='text-2xl font-bold text-indigo-900 md:text-3xl'>
            Website currently under development
          </h1>
          <p className='text-blue-400 font-semibold'>Sorry for the inconvenience...</p>
        </div>
      </div>

      <footer className='py-3 md:py-4 bg-indigo-900 flex justify-center items-center gap-8'>
        <a
          href='https://github.com/srkuleo/noteset'
          target='_blank'
          rel='noreferrer'
          className='text-white'
        >
          <svg
            version='1.1'
            viewBox='0 0 16 16'
            fill='currentColor'
            aria-hidden='true'
            className='size-9'
          >
            <path
              fillRule='evenodd'
              d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
            ></path>
          </svg>
          <p className='sr-only'>Srdjan GitHub profile</p>
        </a>

        <a href='https://www.linkedin.com/in/srkuleo/' target='_blank' rel='noreferrer'>
          <svg viewBox='0,0,256,256' aria-hidden='true' className='size-10'>
            <g
              fill='#ffffff'
              fillRule='nonzero'
              stroke='none'
              strokeWidth='1'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='10'
              strokeDasharray=''
              strokeDashoffset='0'
              fontFamily='none'
              fontWeight='none'
              fontSize='none'
              textAnchor='none'
            >
              <g transform='scale(5.12,5.12)'>
                <path d='M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z'></path>
              </g>
            </g>
          </svg>
          <p className='sr-only'>Srdjan LinkedIn profile</p>
        </a>
      </footer>
    </main>
  );
}
