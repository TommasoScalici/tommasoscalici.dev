import { Code2, ExternalLink } from 'lucide-react';
import React from 'react';
import { SiGithub, SiGoogleplay } from 'react-icons/si';

import type { Project } from '../data/types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="border-glass-border group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/70 shadow-glass-light backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <div className="relative flex h-full flex-col p-6">
                {/* Hover Gradient Effect */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 flex items-start justify-between">
                        <div className="rounded-lg border border-surface bg-background/50 p-3 transition-colors group-hover:border-primary/30">
                            <Code2 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex gap-2">
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-2 text-muted transition-colors hover:bg-glass-bg/5 hover:text-white"
                                    aria-label="View Source Code"
                                >
                                    <SiGithub className="h-5 w-5" />
                                </a>
                            )}
                            {project.playStoreUrl && (
                                <a
                                    href={project.playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-2 text-muted transition-colors hover:bg-glass-bg/5 hover:text-white"
                                    aria-label="View on Google Play"
                                >
                                    <SiGoogleplay className="h-5 w-5" />
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full p-2 text-muted transition-colors hover:bg-glass-bg/5 hover:text-white"
                                    aria-label="View Live Demo"
                                >
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="mb-2 font-mono text-xl font-bold text-main transition-colors group-hover:text-primary">
                        {project.title}
                    </h3>

                    <p className="mb-6 flex-grow text-sm leading-relaxed text-muted">
                        {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-surface bg-black/5 px-3 py-1 font-mono text-xs font-medium text-muted transition-colors group-hover:border-primary/20 group-hover:text-primary/90 dark:bg-white/5"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
