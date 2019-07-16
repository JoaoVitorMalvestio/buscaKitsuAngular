import { CharacterListMediasComponent } from './../character-list-medias/character-list-medias.component';
import { MediaService } from './../media.service';
import { Character } from './../character';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../pagination';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor( private mediaService: MediaService, public dialog: MatDialog ) { }

  ngOnInit() {

  }

  /*openMedias(character: Character) {
    this.mediaService.getMediasOfCharacter(character).subscribe(medias => {
      console.log(medias);
    });
  }*/
  openDialog(characterModal: Character): void {
    const dialogRef = this.dialog.open(CharacterListMediasComponent, {
      width: '250px',
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
