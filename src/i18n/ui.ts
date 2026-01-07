export const languages = {
    en: 'English',
    it: 'Italiano',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.music': 'Music',
        'nav.playlists': 'Playlists',
        'nav.skipToContent': 'Skip to content',
        'footer.copyright': 'All rights reserved.',
        'dialog.choosePlatform': 'Choose your Platform',
        'card.listenNow': 'Listen Now',
        'card.presave': 'Pre-save Now!',
        'card.playOnSpotify': 'PLAY ON SPOTIFY',
        'card.comingSoon': 'Coming Soon',
        'card.comingYear': 'Coming',
        'footer.uses': 'USES',
        'section.playlists': 'Soundtracks for coding and deep work.',
        'hero.viewProjects': 'View Projects',
        'hero.listenMusic': 'Listen to Music',
        'hero.enterFlow': 'Enter the Flow',
        'section.projects.title': 'Selected Works',
        'section.projects.subtitle': 'Engineering robust solutions for complex problems.',
        'section.music.title': 'Sonic Architectures',
        'section.music.subtitle': 'Exploring the boundaries of rhythm and atmosphere.',
        'section.playlists.title': 'Curated Flows',
        'dialog.connectEverywhere': 'Connect Everywhere',
        'cookie.title': 'Cookie Policy',
        'cookie.text':
            'I use analytics to optimize the user flow and understand how my audience interacts with my projects. No personal data is sold.',
        'cookie.deny': 'Deny',
        'cookie.accept': 'Accept',
    },
    it: {
        'nav.home': 'Home',
        'nav.about': 'Chi Sono',
        'nav.projects': 'Progetti',
        'nav.music': 'Musica',
        'nav.playlists': 'Playlist',
        'nav.skipToContent': 'Vai al contenuto',
        'footer.copyright': 'Tutti i diritti riservati.',
        'dialog.choosePlatform': 'Scegli la tua Piattaforma',
        'card.listenNow': 'Ascolta Ora',
        'card.presave': 'Pre-salva Ora!',
        'card.playOnSpotify': 'ASCOLTA SU SPOTIFY',
        'card.comingSoon': 'Presto Disponibile',
        'card.comingYear': 'In arrivo nel',
        'footer.uses': 'Strumentazione',
        'section.playlists': 'Colonne sonore per coding e deep work.',
        'hero.viewProjects': 'Vedi Progetti',
        'hero.listenMusic': 'Ascolta Musica',
        'hero.enterFlow': 'Entra nel Flow',
        'section.projects.title': 'Lavori Selezionati',
        'section.projects.subtitle':
            'Ingegnerizzazione di soluzioni robuste per problemi complessi.',
        'section.music.title': 'Architetture Sonore',
        'section.music.subtitle': "Esplorando i confini del ritmo e dell'atmosfera.",
        'section.playlists.title': 'Playlist che curo',
        'dialog.connectEverywhere': 'Connettiti Ovunque',
        'cookie.title': 'Politica sui Cookie',
        'cookie.text':
            'Utilizzo strumenti di analisi per ottimizzare il flusso utente e capire come il mio pubblico interagisce con i miei progetti. Nessun dato personale viene venduto.',
        'cookie.deny': 'Rifiuta',
        'cookie.accept': 'Accetta',
    },
} as const;

export type TranslationKey = keyof typeof ui.en;
