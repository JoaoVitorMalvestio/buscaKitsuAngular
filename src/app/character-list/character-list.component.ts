import { Character } from './../character';
import { CHARACTERS } from './../mock-characters';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
  }

}
