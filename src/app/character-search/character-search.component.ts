import { Component, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { CharacterService } from '../character.service';
import { Character } from './../character';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit {
  characters$: Observable<Character[]>;

  @Output()
  private searchTerm = new Subject<string>();

  constructor(private characterService: CharacterService) { }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    /*this.characters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.characterService.getCharacters()),
    );*/
  }
}
