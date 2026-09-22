export interface TaxCodeFeature {
    readonly icon: string;
    readonly title: {
        readonly en: string;
        readonly it: string;
    };
    readonly description: {
        readonly en: string;
        readonly it: string;
    };
}

export interface TaxCodeLegalLink {
    readonly icon: string;
    readonly slug: string;
    readonly title: {
        readonly en: string;
        readonly it: string;
    };
    readonly description: {
        readonly en: string;
        readonly it: string;
    };
}

export const TAX_CODE_CONFIG = {
    playStoreUrl: 'https://play.google.com/store/apps/details?id=tommasoscalici.taxcode',
    repoUrl: 'https://github.com/TommasoScalici/tax_code_flutter',
    supportEmail: 'contact@tommasoscalici.dev',
    developerName: 'Tommaso Scalici',
    googleUserPolicyUrl: 'https://developers.google.com/terms/api-services-user-data-policy',
} as const;

export const TAX_CODE_STRINGS = {
    seo: {
        title: {
            en: 'Tax Code by Tommaso Scalici - Italian Tax Code Calculator & Manager',
            it: 'Tax Code by Tommaso Scalici - Calcolo e Gestione Codice Fiscale',
        },
        description: {
            en: 'Official home page for Tax Code by Tommaso Scalici: offline Italian Tax Code calculator, AI document scanner, and cross-device sync for Android and Wear OS.',
            it: 'Home page ufficiale di Tax Code by Tommaso Scalici: calcolo offline del Codice Fiscale, scansione documenti con IA e sincronizzazione cross-device per Android e Wear OS.',
        },
    },
    hero: {
        badges: {
            android: 'Android',
            wearOs: 'Wear OS',
            flutter: 'Flutter 3.22+',
            offlineFirst: 'Offline-First',
        },
        appNamePrefix: 'Tax Code',
        appNameSuffix: 'by Tommaso Scalici',
        subtitle: {
            en: 'A fast, private, and modern cross-platform application to calculate, verify, scan, and manage Italian Tax Codes (Codice Fiscale) with offline calculation, smart AI document recognition, and real-time cross-device cloud synchronization.',
            it: "Un'applicazione multipiattaforma veloce, sicura e moderna per calcolare, verificare, scansionare e gestire i Codici Fiscali italiani con calcolo offline, riconoscimento ottico dei documenti basato su IA e sincronizzazione cloud in tempo reale.",
        },
        ctaPlayStore: {
            en: 'Get on Google Play',
            it: 'Disponibile su Google Play',
        },
        ctaGitHub: {
            en: 'View on GitHub',
            it: 'Codice su GitHub',
        },
        disclaimer: {
            en: 'Independent utility developed by Tommaso Scalici. Not affiliated with the Italian Revenue Agency (Agenzia delle Entrate).',
            it: "Applicazione indipendente sviluppata da Tommaso Scalici. Non affiliata all'Agenzia delle Entrate né ad alcun ente governativo.",
        },
    },
    features: {
        sectionTitle: {
            en: 'Comprehensive Feature Set',
            it: 'Caratteristiche Principali',
        },
        sectionSubtitle: {
            en: 'Engineered for precision, speed, user privacy, and wearable integration.',
            it: 'Progettata per garantire accuratezza, rapidità, rispetto della privacy ed integrazione completa con smartwatch.',
        },
        items: [
            {
                icon: 'lucide:calculator',
                title: {
                    en: 'Instant Offline Calculation',
                    it: 'Calcolo Istantaneo Offline',
                },
                description: {
                    en: 'Calculates and verifies the Italian Tax Code (Codice Fiscale) using official ministerial algorithms (D.M. 23/12/1976) with a built-in database of Italian municipalities and foreign Belfiore codes.',
                    it: 'Calcola e verifica il Codice Fiscale italiano con algoritmo ministeriale ufficiale (D.M. 23/12/1976) e database integrato completo dei comuni italiani e stati esteri con codici Belfiore.',
                },
            },
            {
                icon: 'lucide:scan-barcode',
                title: {
                    en: 'Optical Barcode & QR Generation',
                    it: 'Codici a Barre e QR Code Ottici',
                },
                description: {
                    en: 'Generates high-contrast Code 39, Code 128 barcodes, and QR codes designed for rapid optical scanning at pharmacies, health clinics, and administrative counters.',
                    it: 'Generazione ad alto contrasto di codici a barre Codice 39, Codice 128 e QR code ottimizzati per la lettura ottica con scanner laser in farmacia, studi medici e sportelli della Pubblica Amministrazione.',
                },
            },
            {
                icon: 'lucide:sparkles',
                title: {
                    en: 'Smart Document Scanner (Gemini AI)',
                    it: 'Scansione Smart Documenti (Gemini AI)',
                },
                description: {
                    en: 'Extracts tax code details from physical Health Cards (Tessera Sanitaria) and ID cards using the Gemini Enterprise Agent Platform with ephemeral processing and zero server retention.',
                    it: 'Estrae istantaneamente i dati anagrafici da Tessera Sanitaria e Carta d’Identità tramite Gemini Enterprise Agent Platform con elaborazione effimera e zero salvataggio su server.',
                },
            },
            {
                icon: 'lucide:watch',
                title: {
                    en: 'Pure Flutter Wear OS Companion',
                    it: 'Companion App Wear OS 100% Flutter',
                },
                description: {
                    en: 'Dedicated smartwatch companion featuring smooth rotary crown navigation, tap-to-toggle 1D/2D optical codes, adaptive layouts, and automatic screen brightness boost for laser scanners.',
                    it: 'App per smartwatch con scorrimento fluido tramite ghiera rotante (rotary input), gesture swipe-to-dismiss, commutazione rapida codice a barre/QR e incremento automatico della luminosità.',
                },
            },
            {
                icon: 'lucide:cloud',
                title: {
                    en: 'Cloud Sync & Guest Mode',
                    it: 'Sincronizzazione Cloud e Modalità Ospite',
                },
                description: {
                    en: 'Use 100% anonymously in offline Guest Mode with Hive CE local storage, or sign in with Google to synchronize your cards seamlessly across your phone and smartwatch via Cloud Firestore.',
                    it: 'Utilizzabile in modo 100% anonimo in Modalità Ospite con storage locale cifrato Hive CE, oppure con Google Sign-In per sincronizzare le tessere tra smartphone e smartwatch tramite Cloud Firestore.',
                },
            },
            {
                icon: 'lucide:shield-check',
                title: {
                    en: 'Privacy by Design & GDPR',
                    it: 'Privacy by Design e GDPR',
                },
                description: {
                    en: 'Strict per-user data isolation, end-to-end encryption in transit and at rest, zero third-party data monetization, and self-service one-click account deletion.',
                    it: 'Isolamento rigido dei dati per singolo utente, crittografia avanzata in transito e a riposo, divieto di cessione a terzi e cancellazione completa dei dati in un clic dall’app.',
                },
            },
        ] as readonly TaxCodeFeature[],
    },
    oauth: {
        title: {
            en: 'Why the App Uses Google Sign-In',
            it: "Perché l'App utilizza Google Sign-In",
        },
        subtitle: {
            en: 'Transparency & Google API Services User Data Policy Compliance',
            it: 'Trasparenza e conformità alla Google API Services User Data Policy',
        },
        p1Label: {
            en: '100% Optional Authentication:',
            it: 'Autenticazione 100% Facoltativa:',
        },
        p1Text: {
            en: 'The core features of Tax Code by Tommaso Scalici (including tax code calculation, validation, and local storage) work fully offline in Guest Mode without requiring any account or login.',
            it: 'Le funzionalità principali di Tax Code by Tommaso Scalici (inclusi il calcolo, la verifica e il salvataggio locale dei codici fiscali) funzionano offline in Modalità Ospite senza richiedere alcuna registrazione.',
        },
        p2Label: {
            en: 'Cross-Device Synchronization:',
            it: 'Sincronizzazione Multi-Dispositivo:',
        },
        p2Part1: {
            en: 'When you choose to sign in with Google, the app accesses basic profile scopes (',
            it: "Se scegli di accedere con Google, l'app richiede gli ambiti di profilo base (",
        },
        p2Part2: {
            en: ') through Firebase Authentication. This is used strictly to authenticate your session and securely synchronize your saved tax code records across your Android and Wear OS devices via Cloud Firestore.',
            it: ' tramite Firebase Authentication. Tali informazioni servono unicamente ad autenticare la sessione e sincronizzare in sicurezza le tue tessere su Google Cloud Firestore tra smartphone Android e smartwatch Wear OS.',
        },
        p3Label: {
            en: 'Zero Commercialization & Limited Use:',
            it: 'Nessuna Commercializzazione e Utilizzo Limitato:',
        },
        p3Part1: {
            en: 'Google user data is never sold, never rented, never shared with third parties or data brokers, and never used for advertising, marketing profiling, or AI model training. Our practices strictly adhere to the ',
            it: 'I dati utente Google non vengono mai venduti, affittati né condivisi con broker di dati o terze parti, e non vengono utilizzati per pubblicità mirata o addestramento di intelligenze artificiali. Le nostre procedure sono pienamente conformi alla ',
        },
        policyLinkText: 'Google API Services User Data Policy',
    },
    legal: {
        sectionTitle: {
            en: 'Legal & Policy Documents',
            it: 'Documenti Legali e Normative',
        },
        sectionSubtitle: {
            en: 'Read the official terms, privacy policy, and data deletion guidelines for Tax Code by Tommaso Scalici.',
            it: "Consulta i termini di servizio, l'informativa sulla privacy e le istruzioni di cancellazione dei dati per Tax Code by Tommaso Scalici.",
        },
        readDocument: {
            en: 'Read Document',
            it: 'Leggi Documento',
        },
        links: [
            {
                icon: 'lucide:shield',
                slug: 'privacy-policy',
                title: {
                    en: 'Privacy Policy',
                    it: 'Informativa sulla Privacy',
                },
                description: {
                    en: 'Detailed information on Google OAuth data handling, security safeguards, and privacy rights.',
                    it: 'Dettagli sul trattamento dei dati Google OAuth, misure di sicurezza e diritti di privacy.',
                },
            },
            {
                icon: 'lucide:file-text',
                slug: 'terms-of-service',
                title: {
                    en: 'Terms of Service',
                    it: 'Termini di Servizio',
                },
                description: {
                    en: 'Terms and conditions of use, software licensing, and government non-affiliation disclaimer.',
                    it: 'Condizioni generali d’uso, licenza software e disclaimer di non affiliazione governativa.',
                },
            },
            {
                icon: 'lucide:trash-2',
                slug: 'data-deletion',
                title: {
                    en: 'Data Deletion Instructions',
                    it: 'Cancellazione Dati',
                },
                description: {
                    en: 'Step-by-step instructions on how to permanently erase your account and synchronized data.',
                    it: 'Istruzioni passo-passo per eliminare definitivamente il proprio account e i dati sincronizzati.',
                },
            },
        ] as readonly TaxCodeLegalLink[],
    },
    contact: {
        developerLabel: {
            en: 'Developer & Data Controller:',
            it: 'Sviluppatore e Titolare del Trattamento:',
        },
        supportLabel: {
            en: 'For support and inquiries:',
            it: 'Per assistenza e informazioni:',
        },
    },
} as const;
