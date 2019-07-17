import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Button } from './button';
import { Pagination } from './pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  public current: number;
  public total: number;
  private internalPagination: Pagination;
  public buttons: Button[];

  get pagination() {
    return this.internalPagination;
  }

  @Input() set pagination(value) {
    this.internalPagination = value;
    this.current = this.internalPagination.current;
    this.total = this.internalPagination.total;

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
      button.selected = (this.current == j);
      button.hiddenMobile = this.isHiddenMobile(j);

      this.buttons.push(button);
    }
  }

  private getInitialOffset() {
    if (this.current >= 0  &&
        this.current <= 20) { return 0; }

    if (this.current >= (this.total - 30)) {
      if (this.current >= (this.total - 10)) { return this.current - 50; }
      if (this.current >= (this.total - 20)) { return this.current - 40; }
      if (this.current >= (this.total - 30)) { return this.current - 30; }
    }

    return this.current - 20;
  }

  private getFinalOffset() {
    if (this.current <= 20) {
      if (this.total > 60) { return 60; }
      if (this.total > 50) { return 50; }
      if (this.total > 40) { return 40; }
    }

    if (this.current >= (this.total - 30)) { return this.total; }

    return this.current + 40;
  }

  public getPagePrev() {
    const prev = this.current - 10;

    if (prev < 0) { return 0; }

    return prev;
  }

  public getPageNext() {
    const next = this.current + 10;

    if (next >= this.total) { return this.current; }

    return next;
  }

  private isHiddenMobile(offset: number) {
    // tslint:disable-next-line: triple-equals
    if (offset == this.current) { return false; }
    // tslint:disable-next-line: triple-equals
    if (this.current == 0) { return offset >= 30; }

    if (this.current > (this.total - 10)) { return offset < this.current - 20 ; }
    // tslint:disable-next-line: triple-equals
    if (offset == (this.current - 10) || (offset == this.current + 10)) { return false; }

    return true;
  }

  onPageChange(page: number) {
    this.changePage.emit(page);
  }

  constructor() { }

  ngOnInit() {
    this.buttonsInit();
  }

}