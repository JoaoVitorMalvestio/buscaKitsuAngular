import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  baseUrl = 'https://kitsu.io/api/edge';

  constructor( private httpClient: HttpClient ) {}

  /*getMediasCharacter(term: string, offset: number) {
    // tslint:disable-next-line: triple-equals
    const filtro = term != '' ? ('?filter[name]=' + term + '&') : '?';

    return this.httpClient.get(this.baseUrl + '/characters' + filtro + 'page[offset]=' + offset)
    .pipe(map((response: CharactersResponse) => {
      return (response);
    }));
  }*/
}
