import { Roboto,Space_Mono,DM_Sans,Nanum_Pen_Script } from 'next/font/google'
 
export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const space_Mono = Space_Mono({
    weight: ['400', '700'], // Only include the allowed weights
    subsets: ['latin'],
    display: 'swap',
  });
  export const dm_Sans =DM_Sans({
    weight: ['400',"500","600", '700'], // Only include the allowed weights
    subsets: ['latin',"latin-ext"],
    display: 'swap',
  });

  export const nanum_Pen_Script = Nanum_Pen_Script({
    weight: ['400'], // Only include the allowed weights
    subsets: ['latin'],
    display: 'swap',
  });