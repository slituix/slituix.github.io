import localFont from 'next/font/local'

export const sfPro = localFont({
  src: [
    {
      path: './fonts/SF-Pro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
})
