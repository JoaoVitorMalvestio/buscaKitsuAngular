import { CharacterService } from './../character.service';
import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from './../mock-characters';
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
    this.characterService.getCharacters(newSearchTerm).subscribe((characterList: Character[]) => {
      this.charactersList = characterList;
    });
  }

  ngOnInit() {
    this.refreshSearch('');
  }
}
