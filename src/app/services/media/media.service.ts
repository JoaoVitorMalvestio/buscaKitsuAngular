import { Injectable } from '@angular/core';
import { Character } from '../../components/character/character';
import { MediaCharactersResponse } from '../../components/media/mediaCharactersResponse';
import { MediaResponse } from '../../components/media/mediaResponse';
import { MediaCharactersService } from './../media-character/mediaCharacters.service';
import { MediaCharacters } from '../../components/media/mediaCharacters';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Media } from '../../components/media/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  baseUrl = 'https://kitsu.io/api/edge';

  constructor( private httpClient: HttpClient, private mediaCharactersService: MediaCharactersService ) {}

  getMediasOfCharacter(character: Character): Observable<Media[]> {
    return this.mediaCharactersService.getMediaCharactersByCharacter(character)
    .pipe(map((mediaCharactersResponse: MediaCharactersResponse) => mediaCharactersResponse.data),
    switchMap((mediaCharactersList: MediaCharacters[]) => {
      const mcl = mediaCharactersList.map((mc) => this.getMediaByMediaCharacters(mc));
      return forkJoin(mcl);
    })
    );
  }

  getMediaByMediaCharacters(mediaCharacters: MediaCharacters): Observable<Media> {
    return this.httpClient.get(mediaCharacters.relationships.media.links.related).pipe(map((response: MediaResponse) => {
      return (response.data);
    }));
  }
}
