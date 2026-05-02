import { type CollectionEntry, getCollection } from 'astro:content';

export async function GET() {
    const projects: CollectionEntry<'projects'>[] = await getCollection('projects');
    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
