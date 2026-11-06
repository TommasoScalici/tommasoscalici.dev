import innerThoughts from '../content/music/inner-thoughts.json';
import randomAccessThoughts from '../content/music/random-access-thoughts.json';
import sinestesie from '../content/music/sinestesie.json';
import theMilkyWayTrajectory from '../content/music/the-milky-way-trajectory.json';

interface TrackItem {
    name: string;
    duration?: string;
    isrcCode?: string;
}

interface MusicJsonRelease {
    title: string;
    releaseDate?: string;
    genre: string;
    type: 'Album' | 'EP' | 'Single';
    coverImage: string;
    links?: {
        spotify?: string;
        [key: string]: string | undefined;
    };
    tracks?: TrackItem[];
}

const rawReleases: { slug: string; data: MusicJsonRelease }[] = [
    { slug: 'the-milky-way-trajectory', data: theMilkyWayTrajectory as MusicJsonRelease },
    { slug: 'sinestesie', data: sinestesie as MusicJsonRelease },
    { slug: 'random-access-thoughts', data: randomAccessThoughts as MusicJsonRelease },
    { slug: 'inner-thoughts', data: innerThoughts as MusicJsonRelease },
];

const getIdentitySchema = (url: URL, image: string, worksForName = 'BC Soft S.r.l.') => ({
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

export const getMusicReleasesSchema = (origin: string) =>
    rawReleases.map(({ slug, data }) => {
        const spotifyUrl = data.links?.spotify;
        const genres = data.genre
            .split('/')
            .map((g) => g.trim())
            .filter(Boolean);

        return {
            '@type': 'MusicAlbum' as const,
            ...(spotifyUrl ? { '@id': spotifyUrl, url: spotifyUrl } : {}),
            name: data.title,
            byArtist: { '@id': `${origin}/#person` },
            ...(data.releaseDate ? { datePublished: data.releaseDate } : {}),
            albumReleaseType:
                data.type === 'EP'
                    ? 'https://schema.org/EPRelease'
                    : 'https://schema.org/AlbumRelease',
            image: `${origin}/assets/album_covers/${slug}.webp`,
            numTracks: data.tracks?.length ?? 0,
            genre: genres,
            track: (data.tracks ?? []).map((t) => ({
                '@type': 'MusicRecording' as const,
                name: t.name,
                ...(t.duration ? { duration: t.duration } : {}),
                ...(t.isrcCode ? { isrcCode: t.isrcCode } : {}),
            })),
        };
    });

export const getCombinedSchema = (url: URL, image: string) => ({
    '@context': 'https://schema.org',
    '@graph': [getIdentitySchema(url, image), ...getMusicReleasesSchema(url.origin)],
});
