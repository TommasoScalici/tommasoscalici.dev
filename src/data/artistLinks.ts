import { platforms } from './platforms';

export interface SmartLink {
    label: string;
    url: string;
    icon: string;
    color: string;
}

export const artistLinks: SmartLink[] = [
    { ...platforms.spotify, url: "https://open.spotify.com/artist/6KswMpmmtp3tUbWF3TjBgD" },
    { ...platforms.apple, url: "https://music.apple.com/artist/tommaso-scalici/1723885661" },
    { ...platforms.youtube, url: "https://music.youtube.com/channel/UC4BMkFEXynC2UUVaav-ICCg" },
    { ...platforms.amazon, url: "https://music.amazon.com/artists/B0CRLSQVLW" },
    { ...platforms.tidal, url: "https://tidal.com/browse/artist/44874415" },
    { ...platforms.deezer, url: "https://www.deezer.com/artist/249432402" },
    { ...platforms.bandcamp, url: "https://tommasoscalici.bandcamp.com/" },
];
