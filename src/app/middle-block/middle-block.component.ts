import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from './../mock-characters';

@Component({
  selector: 'app-middle-block',
  templateUrl: './middle-block.component.html',
  styleUrls: ['./middle-block.component.css']
})
export class MiddleBlockComponent {
  charactersList = CHARACTERS;
}
