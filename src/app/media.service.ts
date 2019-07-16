import { MediaCharactersService } from './mediaCharacters.service';
import { MediaResponse } from './mediaResponse';
import { MediaCharactersResponse } from './mediaCharactersResponse';
import { Character } from './character';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediaCharacters } from './mediaCharacters';
import { Media } from './media';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  baseUrl = 'https://kitsu.io/api/edge';

  constructor( private httpClient: HttpClient, private mediaCharactersService: MediaCharactersService ) {}

  getMediasOfCharacter(character: Character): Observable<MediaResponse[]> {
    return this.mediaCharactersService.getMediaCharactersByCharacter(character)
    .pipe(map((mediaCharactersResponse: MediaCharactersResponse) => mediaCharactersResponse.data),
    switchMap((mediaCharactersList: MediaCharacters[]) => {
      const mcl = mediaCharactersList.map((mc) => this.getMediaByMediaCharacters(mc));
      return forkJoin(mcl);
    })
    );
  }

  getMediaByMediaCharacters(mediaCharacters: MediaCharacters): Observable<MediaResponse> {
    return this.httpClient.get(mediaCharacters.relationships.media.links.related).pipe(map((response: MediaResponse) => {
      return (response);
    }));
  }
}
