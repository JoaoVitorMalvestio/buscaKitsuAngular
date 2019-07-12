import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharactersResponse } from './charactersResponse';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseUrl = 'https://kitsu.io/api/edge';

  constructor( private httpClient: HttpClient ) {}

  getCharacters(term: string) {
    const filtro = term != ''?('?filter[name]=' + term): '';

    return this.httpClient.get(this.baseUrl + '/characters' + filtro).pipe(map((response: CharactersResponse) => {
      return (response); /*.map((character) => {
        return {
          id: character.id,
          description: character.attributes.description,
          name: character.attributes.name
        };
      });*/
    }));
  }
}
