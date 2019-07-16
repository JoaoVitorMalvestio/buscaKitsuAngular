import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { Character } from '../character';

import {
   debounceTime, distinctUntilChanged
 } from 'rxjs/operators';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit, OnDestroy {
  characters$: Observable<Character[]>;

  @Output()
  private searchTerm = new Subject<string>();
  private searchEmitter = new EventEmitter<string>();
  private searchSubscription: Subscription;

  constructor() {
    this.searchSubscription = this.searchEmitter.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(term => this.searchTerm.next(term));
  }

  search(term: string): void {
    this.searchEmitter.emit(term);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
