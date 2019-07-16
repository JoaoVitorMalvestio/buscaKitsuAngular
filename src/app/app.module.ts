import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListPaginationComponent } from './character-list-pagination/character-list-pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { MiddleBlockComponent } from './middle-block/middle-block.component';
import { CharacterImageComponent } from './character-image/character-image.component';
import { CharacterDescriptionComponent } from './character-description/character-description.component';
import { PaginationButtonComponent } from './pagination-button/pagination-button.component';
import { CharacterListMediasComponent } from './character-list-medias/character-list-medias.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      CharacterSearchComponent,
      CharacterListComponent,
      CharacterDetailsComponent,
      CharacterListPaginationComponent,
      MiddleBlockComponent,
      CharacterImageComponent,
      CharacterDescriptionComponent,
      PaginationButtonComponent,
      CharacterListMediasComponent
   ],
   entryComponents: [
      CharacterListMediasComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      MatDialogModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
