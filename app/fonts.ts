import localFont from 'next/font/local'

export const sfPro = localFont({
  src: [
    {
      path: './SF-Pro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SF-Pro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SF-Pro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
})
