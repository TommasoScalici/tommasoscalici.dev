export interface Project {
    title: string;
    description: string; // Supports Markdown or simple text
    techStack: string[];
    repoUrl?: string;
    demoUrl?: string;
    playStoreUrl?: string;
    featured?: boolean;
}

export interface MusicRelease {
    title: string;
    artist: string;
    year: number;
    coverImage: string;
    spotifyUrl?: string;
    genre: string;
}

export interface Bio {
    heroTitle: string;
    heroSubtitle: string;
    description: string;
    role: string;
}
