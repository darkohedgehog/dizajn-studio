export default function manifest() {
    return {
      name: 'Reklame-Dizajn',
      short_name: 'Reklame',
      description: 'Dizajn i izdrada reklama, 3D slova, foto tapeta i reklamnih folija',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
         
      ],
    }
  }