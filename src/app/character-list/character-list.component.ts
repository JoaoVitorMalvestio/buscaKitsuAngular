import { CharacterListMediasComponent } from './../character-list-medias/character-list-medias.component';
import { Character } from './../character';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../pagination';
import {MatDialog} from '@angular/material/dialog';

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

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {

  }

  openDialog(characterModal: Character): void {
    const dialogRef = this.dialog.open(CharacterListMediasComponent, {
      width: '80%',
      data: {character: characterModal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onPageChange(page: number) {
    this.changePage.emit(page);
  }

}
