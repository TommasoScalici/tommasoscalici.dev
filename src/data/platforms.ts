export interface PlatformDef {
    label: string;
    icon: string;
    color: string;
}

export const platforms: Record<string, PlatformDef> = {
    spotify: {
        label: "Spotify",
        icon: "spotify",
        color: "hover:text-[#1DB954]"
    },
    apple: {
        label: "Apple Music",
        icon: "apple",
        color: "hover:text-[#FA243C]"
    },
    youtube: {
        label: "YouTube Music",
        icon: "youtube",
        color: "hover:text-[#FF0000]"
    },
    amazon: {
        label: "Amazon Music",
        icon: "amazon",
        color: "hover:text-[#25D1DA]"
    },
    tidal: {
        label: "Tidal",
        icon: "tidal",
        color: "hover:text-white"
    },
    deezer: {
        label: "Deezer",
        icon: "deezer",
        color: "hover:text-[#A238FF]"
    },
    bandcamp: {
        label: "Bandcamp",
        icon: "bandcamp",
        color: "hover:text-[#629aa9]"
    }
};
