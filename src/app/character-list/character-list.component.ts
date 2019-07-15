import { Character } from './../character';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../pagination';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() charactersList: Character[];
  @Input() pagination: Pagination;

  @Output()
  public changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    // this.pageChange.emit(123);
  }

  onPageChange(page: number) {    
    this.changePage.emit(page);
  }

}
