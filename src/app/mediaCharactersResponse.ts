import { MediaCharacters } from './mediaCharacters';
export class MediaCharactersResponse {
    data: MediaCharacters[];
    meta: {
        count: number;
    };
    links: {
        first: string;
        last: string;
    };
}
