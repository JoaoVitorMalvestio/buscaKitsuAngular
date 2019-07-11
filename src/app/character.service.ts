import { Injectable } from '@angular/core';

import { Character } from './character';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

constructor() { }

getCharacters(): void /*Observable<Character[]>*/ {
  // return this.http.get<Character[]>(this.charactersUrl)
}

}
