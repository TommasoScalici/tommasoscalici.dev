import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { SiGithub, SiGoogleplay } from 'react-icons/si';
import type { Project } from '../data/types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 group block rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]"
        >
            <div className="relative p-6 h-full flex flex-col">
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-background/50 border border-surface group-hover:border-primary/30 transition-colors">
                            <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex gap-2">
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                                    aria-label="View Source Code"
                                >
                                    <SiGithub className="w-5 h-5" />
                                </a>
                            )}
                            {project.playStoreUrl && (
                                <a
                                    href={project.playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                                    aria-label="View on Google Play"
                                >
                                    <SiGoogleplay className="w-5 h-5" />
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                                    aria-label="View Live Demo"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium font-mono rounded-full border border-surface bg-white/5 text-gray-300 group-hover:border-primary/20 group-hover:text-primary/90 transition-colors"
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
