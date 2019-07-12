import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { Pagination } from '../pagination';
import { Button } from '../button';

@Component({
  selector: 'app-character-list-pagination',
  templateUrl: './character-list-pagination.component.html',
  styleUrls: ['./character-list-pagination.component.css']
})
export class CharacterListPaginationComponent implements OnInit {
  @Input() pagination: Pagination;
  buttons: Button[];

  private internalCharacterList: Character[];

  get characterList() {
    return this.internalCharacterList;
  }

  @Input() set characterList(value) {
    this.internalCharacterList = value;
    this.buttonsInit();
  }

  private buttonsInit() {
    let i = 1;

    this.buttons = [];
    for (let j = 0; j < 60; j += 10 , i++) {
      const button = new Button();

      button.number = i;
      button.offset = j;
      // tslint:disable-next-line: triple-equals
      button.selected = (this.pagination.current == j);

      this.buttons.push(button);
    }
  }

  constructor() { }

  ngOnInit() {
    this.buttonsInit();
  }

}
