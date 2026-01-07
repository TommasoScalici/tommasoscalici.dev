export interface PlatformDef {
    label: string;
    icon: string;
    color: string;
}

export const platforms: Record<string, PlatformDef> = {
    spotify: {
        label: 'Spotify',
        icon: 'spotify',
        color: 'hover:text-spotify',
    },
    apple: {
        label: 'Apple Music',
        icon: 'apple',
        color: 'hover:text-apple',
    },
    youtube: {
        label: 'YouTube Music',
        icon: 'youtube',
        color: 'hover:text-youtube',
    },
    amazon: {
        label: 'Amazon Music',
        icon: 'amazon',
        color: 'hover:text-amazon',
    },
    tidal: {
        label: 'Tidal',
        icon: 'tidal',
        color: 'hover:text-white',
    },
    deezer: {
        label: 'Deezer',
        icon: 'deezer',
        color: 'hover:text-deezer',
    },
    bandcamp: {
        label: 'Bandcamp',
        icon: 'bandcamp',
        color: 'hover:text-bandcamp',
    },
};

export const platformOrder = [
    'spotify',
    'apple',
    'youtube',
    'amazon',
    'tidal',
    'deezer',
    'bandcamp',
];
