import { type CollectionEntry, getCollection } from 'astro:content';

export async function GET() {
    const music: CollectionEntry<'music'>[] = await getCollection('music');
    return new Response(JSON.stringify(music), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
