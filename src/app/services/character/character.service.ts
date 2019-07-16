import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { CharactersResponse } from '../../components/character/charactersResponse';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseUrl = 'https://kitsu.io/api/edge';

  constructor( private httpClient: HttpClient ) {}

  getCharacters(term: string, offset: number) {
    // tslint:disable-next-line: triple-equals
    const filtro = term != '' ? ('?filter[name]=' + term + '&') : '?';

    return this.httpClient.get(this.baseUrl + '/characters' + filtro + 'page[offset]=' + offset)
    .pipe(map((response: CharactersResponse) => {
      return (response);
    }));
  }
}
