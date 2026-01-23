export interface PlatformDef {
    label: string;
    icon: string;
    color: string;
    hoverBorder: string;
}

export const platforms: Record<string, PlatformDef> = {
    spotify: {
        label: 'Spotify',
        icon: 'spotify',
        color: 'group-hover:text-spotify',
        hoverBorder: 'hover:border-spotify/50',
    },
    apple: {
        label: 'Apple Music',
        icon: 'apple',
        color: 'group-hover:text-apple',
        hoverBorder: 'hover:border-apple/50',
    },
    youtube: {
        label: 'YouTube Music',
        icon: 'youtube',
        color: 'group-hover:text-youtube',
        hoverBorder: 'hover:border-youtube/50',
    },
    amazon: {
        label: 'Amazon Music',
        icon: 'amazon',
        color: 'group-hover:text-amazon',
        hoverBorder: 'hover:border-amazon/50',
    },
    tidal: {
        label: 'Tidal',
        icon: 'tidal',
        color: 'group-hover:text-white',
        hoverBorder: 'hover:border-white/50',
    },
    deezer: {
        label: 'Deezer',
        icon: 'deezer',
        color: 'group-hover:text-deezer',
        hoverBorder: 'hover:border-deezer/50',
    },
    bandcamp: {
        label: 'Bandcamp',
        icon: 'bandcamp',
        color: 'group-hover:text-bandcamp',
        hoverBorder: 'hover:border-bandcamp/50',
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
