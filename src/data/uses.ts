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
            en: 'Development Stack',
            it: 'Stack di Sviluppo',
        },
        items: [
            {
                name: 'Google Antigravity',
                description: {
                    en: 'Agent-first IDE powered by Gemini.',
                    it: 'IDE Agent-first potenziato da Gemini.',
                },
                url: 'https://antigravity.google/',
            },
            {
                name: 'Gemini 3',
                description: {
                    en: 'My daily driver LLM for reasoning and coding.',
                    it: 'Il mio LLM quotidiano per ragionamento e coding.',
                },
                url: 'https://gemini.google.com/',
            },
            {
                name: 'Core Stack',
                description: {
                    en: 'C#, .NET, JS/TS, React, Flutter, Astro, TailwindCSS.',
                    it: 'C#, .NET, JS/TS, React, Flutter, Astro, TailwindCSS.',
                },
            },
            {
                name: 'Git & GitHub',
                description: {
                    en: 'Version control and open source profile.',
                    it: 'Controllo versione e condivisione open source.',
                },
                url: 'https://github.com/',
            },
            {
                name: 'Cloudflare',
                description: {
                    en: 'Edge hosting and serverless functions.',
                    it: 'Hosting Edge e funzioni serverless.',
                },
                url: 'https://www.cloudflare.com/products/registrar/',
            },
        ],
    },
    {
        title: {
            en: 'Music Production & Gear',
            it: 'Produzione Musicale & Gear',
        },
        items: [
            {
                name: 'Ibanez GRG170DX',
                description: {
                    en: 'Reliable 6-string workhorse.',
                    it: 'Affidabile 6 corde da battaglia.',
                },
            },
            {
                name: 'Schecter Diamond Omen 7 Extreme',
                description: {
                    en: '7-string for heavy riffing and low tunings.',
                    it: '7 corde per riff pesanti e accordature basse.',
                },
            },
            {
                name: 'Guitar Pro 8',
                description: {
                    en: 'For composition and transcription.',
                    it: 'Per composizione e trascrizione.',
                },
                url: 'https://www.guitar-pro.com/?ae=1200',
            },
            {
                name: 'Fender Studio',
                description: {
                    en: 'A great professional DAW with AI features for musicians.',
                    it: "Un'ottima DAW professionale con funzionalità AI per musicisti.",
                },
                url: 'https://it.fender.com/pages/fender-studio',
            },
            {
                name: 'Google Flow Music',
                description: {
                    en: 'The future of collaborative music creation.',
                    it: 'Il futuro della creazione musicale collaborativa.',
                },
                url: 'https://www.flowmusic.app/invite/GRDKS4',
            },
        ],
    },
    {
        title: {
            en: 'Artist Growth Tools (Recommended)',
            it: 'Strumenti Crescita Artista (Consigliati)',
        },
        items: [
            {
                name: 'Ditto Music',
                description: {
                    en: 'Best music distributor with unlimited releases.',
                    it: 'Miglior distributore musicale con release illimitate.',
                },
                url: 'https://vrlps.co/iyizd55/cp',
            },
            {
                name: 'artist.tools',
                description: {
                    en: 'Protect your music from bot playlists and fake streams.',
                    it: 'Proteggi la tua musica da playlist bot e stream falsi.',
                },
                url: 'https://artist.tools/?via=tommaso',
            },
            {
                name: 'Songstats',
                description: {
                    en: 'Music analytics platform for artists and record labels.',
                    it: 'Piattaforma di analytics musicale per artisti ed etichette discografiche.',
                },
                url: 'https://songstats.com/app?ref=TOMMASOSCALICI',
            },
            {
                name: 'PlaylistPanda',
                description: {
                    en: 'Submit your music to independent Spotify playlist curators.',
                    it: 'Invia la tua musica a curatori indipendenti di playlist Spotify.',
                },
                url: 'https://playlistpanda.com/c/tommaso-scalici?ref=cmpv54w9b000704jnxq0d5ljw',
            },
            // {
            //     name: 'PlaylistHub',
            //     description: {
            //         en: 'AI tool to get into playlists and grow your fanbase organically.',
            //         it: 'Strumento AI per entrare in playlist SEO e far crescere organicamente la tua fanbase.',
            //     },
            //     url: 'https://playlisthub.io/?via=tommaso',
            // },
            {
                name: 'SubmitLink',
                description: {
                    en: 'Smart links and submission platform. Submit your music here!',
                    it: 'Smart link e piattaforma di submission. Inviami la tua musica qui!',
                },
                url: 'https://www.submitlink.io/c/tommasoscalici?via=tommasoscalici&s=tommasoscalici.dev',
            },
            {
                name: 'Groover',
                description: {
                    en: 'Get your music heard by professional curators and labels.',
                    it: 'Fai ascoltare la tua musica a curatori e label professionisti.',
                },
                url: 'https://groover.co/band/referral/2-TOMMASO-64CA8/',
            },
        ],
    },
];
