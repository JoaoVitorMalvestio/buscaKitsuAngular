import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.css']
})
export class CharacterDescriptionComponent implements OnInit {
  private internalDescription: string;
  public descriptionFormated: string;

  get description() {
    return this.internalDescription;
  }

  @Input() set description(value) {
    this.internalDescription = value;

    this.formatDescription();
  }

  formatDescription(){
    this.descriptionFormated = this.internalDescription;    
    this.descriptionFormated = this.tiraTagBr(this.descriptionFormated);
    if (this.descriptionFormated.length > 200) { this.descriptionFormated =  this.descriptionFormated.slice(0, 200) + '...'; }
  }

  constructor() { }

  ngOnInit() {

  }

  tiraTagBr(texto: string) {
    // Tira a tag <br> do texto
    return texto = texto.replace(/<br>/g, ' ');
  }


}
