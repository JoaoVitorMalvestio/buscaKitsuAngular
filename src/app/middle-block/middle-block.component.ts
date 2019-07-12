import { CharactersResponse } from './../charactersResponse';
import { CharacterService } from './../character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { Pagination } from '../pagination';

@Component({
  selector: 'app-middle-block',
  templateUrl: './middle-block.component.html',
  styleUrls: ['./middle-block.component.css']
})
export class MiddleBlockComponent implements OnInit {

  public charactersList: Character[] = [];
  public pagination: Pagination = new Pagination();

  constructor(private characterService: CharacterService) {
  }

  refreshSearch(newSearchTerm: string) {
    this.characterService.getCharacters(newSearchTerm).subscribe((charactersResponse: CharactersResponse) => {
      this.charactersList = charactersResponse.data;
      this.pagination.total = charactersResponse.meta.count;
      this.pagination.prevLink = charactersResponse.links.prev;
      this.pagination.nextLink = charactersResponse.links.next;
    });
  }

  ngOnInit() {
    this.refreshSearch('');
  }
}
