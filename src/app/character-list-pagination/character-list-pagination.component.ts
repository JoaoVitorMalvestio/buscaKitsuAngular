import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-list-pagination',
  templateUrl: './character-list-pagination.component.html',
  styleUrls: ['./character-list-pagination.component.css']
})
export class CharacterListPaginationComponent implements OnInit {
  @Input() charactersList: Character[];

  constructor() { }

  ngOnInit() {
  }

}
