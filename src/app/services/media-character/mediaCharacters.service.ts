import { Injectable } from '@angular/core';
import { Character } from '../../components/character/character';
import { MediaCharactersResponse } from '../../components/media/mediaCharactersResponse';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaCharactersService {

  constructor( private httpClient: HttpClient ) {}

  getMediaCharactersByCharacter(character: Character) {
    return this.httpClient.get(character.relationships.mediaCharacters.links.related).pipe(map((response: MediaCharactersResponse) => {
      return (response);
    }));
  }
}
