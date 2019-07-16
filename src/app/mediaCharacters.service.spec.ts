/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediaCharactersService } from './mediaCharacters.service';

describe('Service: MediaCharacters', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaCharactersService]
    });
  });

  it('should ...', inject([MediaCharactersService], (service: MediaCharactersService) => {
    expect(service).toBeTruthy();
  }));
});
