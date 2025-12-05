export interface Playlist {
    title: string;
    description: string;
    coverImage: string;
    spotifyId: string;
    genre: string;
}

export const playlistsData: Record<string, Playlist[]> = {
    en: [
        {
            title: "Coding Lofi ☕",
            description: "Focus music designed for Developers. Python, JS, C++ & Deep Work.",
            coverImage: "/images/playlist_covers/lofi.webp",
            spotifyId: "0yF9pJ62XkAgxDGMlbyenf",
            genre: "Focus / Lofi"
        },
        {
            title: "Modern Prog ⚡",
            description: "The best Modern Instrumental Progressive Metal. Djent, Math Rock & Heavy Riffs.",
            coverImage: "/images/playlist_covers/instrumental-prog.webp",
            spotifyId: "32xYNI24QWMWfSgG1xZgjI",
            genre: "Instrumental Metal"
        },
        {
            title: "Prog Odyssey 🌌",
            description: "A journey through the evolution of Progressive Rock and Metal.",
            coverImage: "/images/playlist_covers/prog-odyssey.webp",
            spotifyId: "7sO9HU4rqRAnF7A15zqc5K",
            genre: "Prog Rock / Metal"
        }
    ],
    it: [
        {
            title: "Coding Lofi ☕",
            description: "Musica focus progettata per sviluppatori. Python, JS, C++ & Deep Work.",
            coverImage: "/images/playlist_covers/lofi.webp",
            spotifyId: "0yF9pJ62XkAgxDGMlbyenf",
            genre: "Focus / Lofi"
        },
        {
            title: "Modern Prog ⚡",
            description: "Il meglio del Progressive Metal Strumentale Moderno. Djent, Math Rock & Riff Pesanti.",
            coverImage: "/images/playlist_covers/instrumental-prog.webp",
            spotifyId: "32xYNI24QWMWfSgG1xZgjI",
            genre: "Metal Strumentale"
        },
        {
            title: "Prog Odyssey 🌌",
            description: "Un viaggio attraverso l'evoluzione del Progressive Rock e Metal.",
            coverImage: "/images/playlist_covers/prog-odyssey.webp",
            spotifyId: "7sO9HU4rqRAnF7A15zqc5K",
            genre: "Prog Rock / Metal"
        }
    ]
};
