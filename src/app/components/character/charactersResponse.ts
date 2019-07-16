import { Character } from './character';

export class CharactersResponse {
    data: Character[];
    meta: {
      count: number;
    };
    links: {
      first: string;
      prev: string;
      next: string;
      last: string;
    };
}

