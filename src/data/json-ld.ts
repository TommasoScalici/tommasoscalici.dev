export const getIdentitySchema = (url: URL, image: string, worksForName = 'BC Soft S.r.l.') => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tommaso Scalici',
    url: url.toString(),
    image,
    jobTitle: ['Senior Software Engineer', 'Music Producer'],
    knowsAbout: [
        'Software Architecture',
        'TypeScript',
        'React',
        'Astro Framework',
        'Tailwind CSS',
        'Progressive Metal',
        'Music Production',
    ],
    worksFor: { '@type': 'Organization', name: worksForName },
    sameAs: [
        // Tech & Dev
        'https://github.com/TommasoScalici',
        'https://www.linkedin.com/in/tommasoscalici',
        'https://play.google.com/store/apps/developer?id=Tommaso%C2%A0Scalici',
        'https://stackoverflow.com/users/3150766/tommaso-scalici',

        // Music Stores (Authority)
        'https://open.spotify.com/artist/6KswMpmmtp3tUbWF3TjBgD',
        'https://music.apple.com/artist/tommaso-scalici/1723885661',
        'https://www.deezer.com/artist/249432402',
        'https://tidal.com/browse/artist/44874415',
        'https://music.amazon.com/artists/B0CRLSQVLW',
        'https://music.youtube.com/channel/UC4BMkFEXynC2UUVaav-ICCg',
        'https://tommasoscalici.bandcamp.com/',

        // Social & Personal
        'https://www.instagram.com/tommasoscalici91',
        'https://www.facebook.com/tommasoscaliciproducer', // Page
        'https://www.facebook.com/tommaso.scalici.91/', // Profile
        'https://x.com/Tommaso_Scalici',
        'https://www.tiktok.com/@tommaso.scalici',
        'https://www.threads.net/@tommasoscalici91',
        'https://www.last.fm/it/user/TommasoScalici',
        'https://steamcommunity.com/id/tommasoscalici/',
    ],
});

export const musicSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'MusicAlbum',
            '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
            url: 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
            name: 'Random Access Thoughts',
            byArtist: {
                '@type': 'Person',
                name: 'Tommaso Scalici',
                sameAs: [
                    'https://open.spotify.com/artist/6KswMpmmtp3tUbWF3TjBgD',
                    'https://music.apple.com/artist/tommaso-scalici/1723885661',
                    'https://tommasoscalici.bandcamp.com/',
                    'https://www.youtube.com/@tommasoscalici',
                    'https://soundcloud.com/tommasoscalici',
                    'https://www.deezer.com/artist/249432402',
                    'https://music.amazon.com/artists/B0CRLSQVLW',
                ],
            },
            datePublished: '2025-01-30',
            albumReleaseType: 'https://schema.org/AlbumRelease',
            image: 'https://f4.bcbits.com/img/a0744178181_10.jpg',
            numTracks: 10,
            identifier: {
                '@type': 'PropertyValue',
                propertyID: 'gtin13',
                value: '5063807695195',
            },
            genre: ['Progressive Rock', 'Progressive Metal', 'Art Rock', 'lo-fi', 'Dubstep'],
            potentialAction: {
                '@type': 'ListenAction',
                target: [
                    {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                        actionPlatform: [
                            'https://schema.org/DesktopWebPlatform',
                            'https://schema.org/IOSPlatform',
                            'https://schema.org/AndroidPlatform',
                        ],
                    },
                ],
            },
            track: [
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/26Gr2LTRTceXGCk19ZGhmB?si=5c97a157278f472d',
                    name: 'Initialize()',
                    duration: 'PT3M50S',
                    isrcCode: 'TCAJB2464596',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/0UlFeHRwZRy1bGFrIFsQ4K?si=a52ef469426b4617',
                    name: '#100021',
                    duration: 'PT5M0S',
                    isrcCode: 'TCAJB2464599',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/5sCio8tyDkHiYEwwvTPHHP?si=8d1d6c68028742e3',
                    name: '#200052',
                    duration: 'PT3M16S',
                    isrcCode: 'TCAJB2464607',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/1c9sHTG3wSIfnB5cOtwftn?si=e1a0422a43384468',
                    name: '#300041',
                    duration: 'PT2M44S',
                    isrcCode: 'TCAJB2464611',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/6fSAxgQa8NBk26htZ3XcMh?si=0e3a773188d9497a',
                    name: '#40004E',
                    duration: 'PT3M50S',
                    isrcCode: 'TCAJB2464613',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/7qruiNQjmdj4Qjs96UuisJ?si=6d321b618e2e41d4',
                    name: '#500044',
                    duration: 'PT1M52S',
                    isrcCode: 'TCAJB2464614',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/01Qsc0h2oHIj5ABv5qdWZJ?si=350c545c0a0d4bce',
                    name: '#60004F',
                    duration: 'PT1M38S',
                    isrcCode: 'TCAJB2464615',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/3tYp9RhOjIf92vDYufo4dT?si=3d23f1e95b174744',
                    name: '#70004D',
                    duration: 'PT9M32S',
                    isrcCode: 'TCAJB2464619',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/3lSg8FH0I8E8RxnDxwd7T4?si=c62e6027c68d4883',
                    name: 'Segmentation Fault',
                    duration: 'PT2M26S',
                    isrcCode: 'TCAJB2464624',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/580UDyj0Ndz5T4F3mL6FdZ?si=66772f22d1244e69',
                    name: 'Dispose()',
                    duration: 'PT2M12S',
                    isrcCode: 'TCAJB2464632',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
                    },
                },
            ],
        },
        {
            '@type': 'MusicAlbum',
            '@id': 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
            url: 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
            name: 'Inner Thoughts',
            byArtist: {
                '@type': 'Person',
                name: 'Tommaso Scalici',
                sameAs: [
                    'https://open.spotify.com/artist/6KswMpmmtp3tUbWF3TjBgD',
                    'https://music.apple.com/artist/tommaso-scalici/1723885661',
                    'https://tommasoscalici.bandcamp.com/',
                    'https://www.youtube.com/@tommasoscalici',
                    'https://soundcloud.com/tommasoscalici',
                    'https://www.deezer.com/artist/249432402',
                    'https://music.amazon.com/artists/B0CRLSQVLW',
                ],
            },
            datePublished: '2024-01-30',
            albumReleaseType: 'https://schema.org/EPRelease',
            image: 'https://f4.bcbits.com/img/a2746045371_10.jpg',
            numTracks: 4,
            identifier: {
                '@type': 'PropertyValue',
                propertyID: 'gtin13',
                value: '5063807689903',
            },
            genre: ['Progressive Rock', 'Progressive Metal', 'Art Rock'],
            potentialAction: {
                '@type': 'ListenAction',
                target: [
                    {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
                        actionPlatform: [
                            'https://schema.org/DesktopWebPlatform',
                            'https://schema.org/IOSPlatform',
                            'https://schema.org/AndroidPlatform',
                        ],
                    },
                ],
            },
            track: [
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/3wku2GEYrbgXzJCNVBPNR7',
                    name: 'Dreamshaped Will',
                    duration: 'PT6M31S',
                    isrcCode: 'TCAHT2448275',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/1ySwXXdNVHpoowiN3OsXUC',
                    name: 'Night Wandering',
                    duration: 'PT7M22S',
                    isrcCode: 'TCAHT2448301',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/7IsKBNUGDG3zui6yPUzmPO',
                    name: 'Rageshaped Will',
                    duration: 'PT3M54S',
                    isrcCode: 'TCAHT2448312',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
                    },
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://open.spotify.com/track/27RiFnYuJCXm4cOJw4vDpC',
                    name: 'Displaced Mind',
                    duration: 'PT3M0S',
                    isrcCode: 'TCAHT2448321',
                    inAlbum: {
                        '@type': 'MusicAlbum',
                        '@id': 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
                    },
                },
            ],
        },
    ],
};
