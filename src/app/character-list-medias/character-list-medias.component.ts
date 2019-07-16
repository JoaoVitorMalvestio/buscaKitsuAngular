import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Icharacter } from '../icharacter';

@Component({
  selector: 'app-character-list-medias',
  templateUrl: './character-list-medias.component.html',
  styleUrls: ['./character-list-medias.component.css']
})
export class CharacterListMediasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CharacterListMediasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Icharacter) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
