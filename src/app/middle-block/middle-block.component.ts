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
  private searchTerm = '';

  constructor(private characterService: CharacterService) {
  }

  refreshSearch(newSearchTerm: string, offset: number = 0) {
    this.characterService.getCharacters(newSearchTerm, offset).subscribe((charactersResponse: CharactersResponse) => {
      this.searchTerm = newSearchTerm;
      this.charactersList = charactersResponse.data;
      this.pagination.total = charactersResponse.meta.count;
      this.pagination.current = offset;
      this.pagination.prevLink = charactersResponse.links.prev;
      this.pagination.nextLink = charactersResponse.links.next;
    });
  }

  changePage(pageNumber: number) {
    this.refreshSearch(this.searchTerm, pageNumber);
  }

  ngOnInit() {
    this.refreshSearch('');
  }
}
