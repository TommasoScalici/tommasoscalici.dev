export interface ToolItem {
    name: string;
    description?: string | Record<string, string>; // Optional description, supports localization
    url?: string; // Optional link
}

export interface UsesCategory {
    title: string | Record<string, string>;
    items: ToolItem[];
}

export const usesData: UsesCategory[] = [
    {
        title: {
            en: "Development Stack",
            it: "Stack di Sviluppo",
        },
        items: [
            {
                name: "Google Antigravity",
                description: {
                    en: "Agent-first IDE powered by Gemini.",
                    it: "IDE Agent-first potenziato da Gemini.",
                },
                url: "https://antigravity.google/",
            },
            {
                name: "Gemini 3",
                description: {
                    en: "My daily driver LLM for reasoning and coding.",
                    it: "Il mio LLM quotidiano per ragionamento e coding.",
                },
                url: "https://gemini.google.com/",
            },
            {
                name: "Core Stack",
                description: {
                    en: "C#, .NET, JS/TS, React, Flutter, Astro, TailwindCSS.",
                    it: "C#, .NET, JS/TS, React, Flutter, Astro, TailwindCSS.",
                },
            },
            {
                name: "Git & GitHub",
                description: {
                    en: "Version control and open source profile.",
                    it: "Controllo versione e condivisione open source.",
                },
                url: "https://github.com/",
            },
            {
                name: "Cloudflare",
                description: {
                    en: "Edge hosting and serverless functions.",
                    it: "Hosting Edge e funzioni serverless.",
                },
                url: "https://www.cloudflare.com/products/registrar/",
            },
        ],
    },
    {
        title: {
            en: "Music Production & Gear",
            it: "Produzione Musicale & Gear",
        },
        items: [
            {
                name: "Ibanez GRG170DX",
                description: {
                    en: "Reliable 6-string workhorse.",
                    it: "Affidabile 6 corde da battaglia.",
                },
            },
            {
                name: "Schecter Diamond Omen 7 Extreme",
                description: {
                    en: "7-string for heavy riffing and low tunings.",
                    it: "7 corde per riff pesanti e accordature basse.",
                },
            },
            {
                name: "Guitar Pro 8",
                description: {
                    en: "For composition and transcription.",
                    it: "Per composizione e trascrizione.",
                },
                url: "https://www.guitar-pro.com/",
            },
            {
                name: "Suno Studio",
                description: {
                    en: "AI Music generation experiments.",
                    it: "Esperimenti di generazione musicale AI.",
                },
                url: "https://suno.com/",
            },
        ],
    },
    {
        title: {
            en: "Artist Growth Tools (Recommended)",
            it: "Strumenti Crescita Artista (Consigliati)",
        },
        items: [
            {
                name: "Ditto Music",
                description: {
                    en: "Best music distributor with unlimited releases.",
                    it: "Miglior distributore musicale con release illimitate.",
                },
                url: "https://vrlps.co/iyizd55/cp",
            },
            {
                name: "artist.tools",
                description: {
                    en: "Protect your music from bot playlists and fake streams.",
                    it: "Proteggi la tua musica da playlist bot e stream falsi.",
                },
                url: "https://artist.tools/?via=tommaso",
            },
            {
                name: "PlaylistHub",
                description: {
                    en: "AI tool to get into playlists and grow your fanbase organically.",
                    it: "Strumento AI per entrare in playlist SEO e far crescere organicamente la tua fanbase.",
                },
                url: "https://playlisthub.io/?via=tommaso",
            },
            {
                name: "SubmitLink",
                description: {
                    en: "Smart links and submission platform. Submit your music here!",
                    it: "Smart link e piattaforma di submission. Inviami la tua musica qui!",
                },
                url: "https://www.submitlink.io/c/tommasoscalici?via=tommasoscalici&s=tommasoscalici.dev",
            },
        ],
    },
];
