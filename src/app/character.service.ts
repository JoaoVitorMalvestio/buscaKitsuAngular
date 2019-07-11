import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './character';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseUrl = 'https://kitsu.io/api/edge';

  constructor( private httpClient: HttpClient ) {}

  getCharacters(term: string) {
    const filtro = term != ''?('?filter[name]=' + term): '';

    return this.httpClient.get(this.baseUrl + '/characters' + filtro); /* .pipe(map((response: {data: any[]}) => {
      return (response.data).map((character) => {
        return {
          id: character.id,
          description: character.attributes.description,
          name: character.attributes.name
        };
      });
    }));*/
  }
}
