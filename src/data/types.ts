export interface Project {
    title: string;
    description: string; // Supports Markdown or simple text
    techStack: string[];
    repoUrl?: string;
    demoUrl?: string;
    playStoreUrl?: string;
    featured?: boolean;
}

export interface PlatformLinks {
    spotify?: string;
    apple?: string;
    deezer?: string;
    tidal?: string;
    amazon?: string;
    youtube?: string;
    bandcamp?: string;
}

export interface MusicRelease {
    title: string;
    year: string;
    genre: string;
    coverImage: string | ImageMetadata;
    type: "Album" | "EP" | "Single";
    links: PlatformLinks;
    isUpcoming?: boolean; // New flag for 2026 release
}

export interface Bio {
    heroTitle: string;
    heroSubtitle: string;
    description: string;
    role: string;
}
