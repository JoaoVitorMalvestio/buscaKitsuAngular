import { CharactersResponse } from '../../character/charactersResponse';
import { CharacterService } from '../../../services/character/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../character/character';
import { Pagination } from '../../shared/pagination/pagination';


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
      this.pagination = new Pagination();
      this.pagination.total = charactersResponse.meta.count;
      this.pagination.current = offset;
    });
  }

  changePage(pageNumber: number) {
    this.refreshSearch(this.searchTerm, pageNumber);
  }

  ngOnInit() {
    this.refreshSearch('');
  }
}
