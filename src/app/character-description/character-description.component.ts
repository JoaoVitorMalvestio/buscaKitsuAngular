import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.css']
})
export class CharacterDescriptionComponent implements OnInit {
  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
