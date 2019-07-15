import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  @Output()
  public changePage = new EventEmitter<number>();

  private buttonsInit() {
    this.buttons = [];

    for (let j = this.getInitialOffset(); j < this.getFinalOffset(); j += 10) {
      const button = new Button();

      button.number = (j / 10) + 1;
      button.offset = j;
      // tslint:disable-next-line: triple-equals
      button.selected = (this.pagination.current == j);

      this.buttons.push(button);
    }
  }

  private getInitialOffset() {
    if (this.pagination.current >= 0  &&
        this.pagination.current < 30) { return 0; }

    if (this.pagination.current >= (this.pagination.total - 30)) { return this.pagination.total - 50; }

    return this.pagination.current - 20;
  }

  private getFinalOffset() {
    if (this.pagination.current < 30) { return 60; }

    if (this.pagination.current >= (this.pagination.total - 30)) { return this.pagination.total; }

    return this.pagination.current + 40;
  }

  public getPagePrev() {
    const prev = this.pagination.current - 10;

    if (prev < 0) { return 0; }

    return prev;
  }

  public getPageNext() {
    const prev = this.pagination.current + 10;

    if (prev > this.pagination.total - 10) { return this.pagination.current; }

    return prev;
  }

  onPageChange(page: number) {
    this.changePage.emit(page);
  }

  constructor() { }

  ngOnInit() {
    this.buttonsInit();
  }

}
