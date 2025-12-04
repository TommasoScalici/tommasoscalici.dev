import type { Project } from './types';

export const projects: Project[] = [
    {
        title: "MathExtensions",
        description: "High-performance math library.",
        techStack: ["C#", ".NET"],
        featured: true,
        repoUrl: "https://github.com/TommasoScalici/MathExtensions"
    },
    {
        title: "Tax Code Flutter",
        description: "Vertex AI-enabled utility app.",
        techStack: ["Dart", "Flutter", "Vertex AI"],
        featured: true,
        repoUrl: "https://github.com/TommasoScalici/tax_code_flutter",
        playStoreUrl: "https://play.google.com/store/apps/details?id=tommasoscalici.taxcode"
    },
    {
        title: "MVVMExtensions",
        description: "Architecture toolkit.",
        techStack: ["C#", ".NET", "MVVM"],
        featured: true,
        repoUrl: "https://github.com/TommasoScalici/MVVMExtensions"
    }
];
