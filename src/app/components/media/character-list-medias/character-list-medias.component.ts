import { Media } from '../media';
import { MediaService } from '../../../services/media/media.service';
import { Icharacter } from '../../character/icharacter';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-character-list-medias',
  templateUrl: './character-list-medias.component.html',
  styleUrls: ['./character-list-medias.component.css']
})
export class CharacterListMediasComponent implements OnInit {
  public medias: Media[] = [];

  constructor(
    private mediaService: MediaService,
    public dialogRef: MatDialogRef<CharacterListMediasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Icharacter) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  getMediasOfCharacter() {
    this.mediaService.getMediasOfCharacter(this.data.character).subscribe(medias => {
      this.medias = medias;
    });
  }

  ngOnInit() {
    this.getMediasOfCharacter();
  }

}
