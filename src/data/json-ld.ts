export const getIdentitySchema = (url: URL, image: string, worksForName = 'BC Soft S.r.l.') => ({
    '@type': 'Person',
    '@id': `${url.origin}/#person`,
    name: 'Tommaso Scalici',
    url: url.origin,
    image,
    jobTitle: ['Senior Software Engineer', 'Music Producer'],
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url.toString(),
    },
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

export const musicReleases = [
    {
        '@type': 'MusicAlbum',
        '@id': 'https://open.spotify.com/album/0z5dDG3w9PfgQ8DOxiiMfa',
        url: 'https://open.spotify.com/album/0z5dDG3w9PfgQ8DOxiiMfa',
        name: 'Sinestesie',
        byArtist: { '@id': 'https://tommasoscalici.dev/#person' },
        datePublished: '2026-02-06',
        albumReleaseType: 'https://schema.org/EPRelease',
        image: 'https://tommasoscalici.dev/assets/album_covers/sinestesie.webp',
        numTracks: 4,
        genre: [
            'Instrumental',
            'Progressive Rock',
            'Progressive Metal',
            'Experimental',
            'Math Rock',
        ],
        track: [
            {
                '@type': 'MusicRecording',
                name: 'Pareidolie Silenziose',
                duration: 'PT5M49S',
                isrcCode: 'GXJBS2531458',
            },
            {
                '@type': 'MusicRecording',
                name: 'Echi Di Velluto',
                duration: 'PT2M39S',
                isrcCode: 'GXJBS2531461',
            },
            {
                '@type': 'MusicRecording',
                name: 'Discromia Violenta',
                duration: 'PT4M19S',
                isrcCode: 'GXJBS2531460',
            },
            {
                '@type': 'MusicRecording',
                name: 'Immagine Residua',
                duration: 'PT2M14S',
                isrcCode: 'GXJBS2531459',
            },
        ],
    },
    {
        '@type': 'MusicAlbum',
        '@id': 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
        url: 'https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS',
        name: 'Random Access Thoughts',
        byArtist: { '@id': 'https://tommasoscalici.dev/#person' },
        datePublished: '2025-01-30',
        albumReleaseType: 'https://schema.org/AlbumRelease',
        image: 'https://f4.bcbits.com/img/a0744178181_10.jpg',
        numTracks: 10,
        genre: ['Progressive Rock', 'Progressive Metal', 'Art Rock', 'lo-fi', 'Dubstep'],
        track: [
            {
                '@type': 'MusicRecording',
                name: 'Initialize()',
                duration: 'PT3M50S',
                isrcCode: 'TCAJB2464596',
            },
            {
                '@type': 'MusicRecording',
                name: '#100021',
                duration: 'PT5M0S',
                isrcCode: 'TCAJB2464599',
            },
            {
                '@type': 'MusicRecording',
                name: '#200052',
                duration: 'PT3M16S',
                isrcCode: 'TCAJB2464607',
            },
            {
                '@type': 'MusicRecording',
                name: '#300041',
                duration: 'PT2M44S',
                isrcCode: 'TCAJB2464611',
            },
            {
                '@type': 'MusicRecording',
                name: '#40004E',
                duration: 'PT3M50S',
                isrcCode: 'TCAJB2464613',
            },
            {
                '@type': 'MusicRecording',
                name: '#500044',
                duration: 'PT1M52S',
                isrcCode: 'TCAJB2464614',
            },
            {
                '@type': 'MusicRecording',
                name: '#60004F',
                duration: 'PT1M38S',
                isrcCode: 'TCAJB2464615',
            },
            {
                '@type': 'MusicRecording',
                name: '#70004D',
                duration: 'PT9M32S',
                isrcCode: 'TCAJB2464619',
            },
            {
                '@type': 'MusicRecording',
                name: 'Segmentation Fault',
                duration: 'PT2M26S',
                isrcCode: 'TCAJB2464624',
            },
            {
                '@type': 'MusicRecording',
                name: 'Dispose()',
                duration: 'PT2M12S',
                isrcCode: 'TCAJB2464632',
            },
        ],
    },
    {
        '@type': 'MusicAlbum',
        '@id': 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
        url: 'https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv',
        name: 'Inner Thoughts',
        byArtist: { '@id': 'https://tommasoscalici.dev/#person' },
        datePublished: '2024-01-30',
        albumReleaseType: 'https://schema.org/EPRelease',
        image: 'https://f4.bcbits.com/img/a2746045371_10.jpg',
        numTracks: 4,
        genre: ['Progressive Rock', 'Progressive Metal', 'Art Rock'],
        track: [
            {
                '@type': 'MusicRecording',
                name: 'Dreamshaped Will',
                duration: 'PT6M31S',
                isrcCode: 'TCAHT2448275',
            },
            {
                '@type': 'MusicRecording',
                name: 'Night Wandering',
                duration: 'PT7M22S',
                isrcCode: 'TCAHT2448301',
            },
            {
                '@type': 'MusicRecording',
                name: 'Rageshaped Will',
                duration: 'PT3M54S',
                isrcCode: 'TCAHT2448312',
            },
            {
                '@type': 'MusicRecording',
                name: 'Displaced Mind',
                duration: 'PT3M0S',
                isrcCode: 'TCAHT2448321',
            },
        ],
    },
];

export const getCombinedSchema = (url: URL, image: string) => ({
    '@context': 'https://schema.org',
    '@graph': [getIdentitySchema(url, image), ...musicReleases],
});
