import { Button } from '../button';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.css']
})
export class PaginationButtonComponent implements OnInit {
  @Input() buttons: Button[];

  @Output()
  public changePage = new EventEmitter<number>();

  onPageChange(page: number) {
    this.changePage.emit(page);
  }

  constructor() { }

  ngOnInit() {
  }

}
