import { type CollectionEntry, getCollection } from 'astro:content';

export async function GET() {
    const bio: CollectionEntry<'bio'>[] = await getCollection('bio');
    return new Response(JSON.stringify(bio), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
