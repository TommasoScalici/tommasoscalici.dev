import type { MusicRelease } from "./types";

export const musicReleases: MusicRelease[] = [
    {
        title: "Random Access Thoughts",
        year: "2025",
        genre: "Prog Metal / Djent / Lofi",
        coverImage: "images/album_covers/random-access-thoughts.webp",
        type: "Album",
        links: {
            spotify: "https://open.spotify.com/album/28mIion9ys60E5GbX5CpLS",
            apple: "https://music.apple.com/album/1846497490",
            deezer: "https://www.deezer.com/album/839195852",
            tidal: "https://tidal.com/browse/album/467248954",
            amazon: "https://music.amazon.com/albums/B0FWKPGPTJ",
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lVFpqujENo2g2mqThSzltKzgV-k4gE1hM",
            bandcamp: "https://tommasoscalici.bandcamp.com/album/random-access-thoughts"
        }
    },
    {
        title: "Inner Thoughts",
        year: "2024",
        genre: "Prog Rock / Metal",
        coverImage: "images/album_covers/inner-thoughts.webp",
        type: "EP",
        links: {
            spotify: "https://open.spotify.com/album/4ReGhGEuJ3WQpW5uuEXusv",
            apple: "https://music.apple.com/album/1846632899",
            deezer: "https://www.deezer.com/album/839194422",
            tidal: "https://tidal.com/browse/album/467394137",
            amazon: "https://music.amazon.com/albums/B0FWLPT28Z",
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nwemOas8nlbFcvH7MEUUc2Qpk3p1O45QE",
            bandcamp: "https://tommasoscalici.bandcamp.com/album/inner-thoughts"
        }
    },
    {
        title: "Sinestesie",
        year: "2026",
        genre: "Experimental / Prog",
        coverImage: "images/album_covers/sinestesie.webp",
        type: "EP",
        links: {},
        isUpcoming: true
    }
];
