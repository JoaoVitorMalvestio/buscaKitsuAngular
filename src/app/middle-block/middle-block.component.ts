import { CharactersResponse } from './../charactersResponse';
import { CharacterService } from './../character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-middle-block',
  templateUrl: './middle-block.component.html',
  styleUrls: ['./middle-block.component.css']
})
export class MiddleBlockComponent implements OnInit {

  public charactersList: Character[] = [];

  constructor(private characterService: CharacterService) {
  }

  refreshSearch(newSearchTerm: string) {
    this.characterService.getCharacters(newSearchTerm).subscribe((characterList: CharactersResponse) => {
      this.charactersList = characterList.data;
    });
  }

  ngOnInit() {
    this.refreshSearch('');
  }
}
