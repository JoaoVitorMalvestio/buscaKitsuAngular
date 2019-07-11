import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './character';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseUrl = 'https://kitsu.io/api/edge/characters';
// tslint:disable-next-line: new-parens
  characters$: Observable<Character[]>;

  constructor( private httpClient: HttpClient ) {}

  getCharacters() {
    return this.httpClient.get(this.baseUrl);
  }
}
