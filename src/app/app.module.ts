import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/structural/top-bar/top-bar.component';
import { CharacterSearchComponent } from './components/character/character-search/character-search.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { MiddleBlockComponent } from './components/structural/middle-block/middle-block.component';
import { CharacterImageComponent } from './components/character/character-image/character-image.component';
import { CharacterDescriptionComponent } from './components/character/character-description/character-description.component';
import { PaginationButtonComponent } from './components/shared/pagination/pagination-button/pagination-button.component';
import { CharacterListMediasComponent } from './components/media/character-list-medias/character-list-medias.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderSpinnerComponent } from './components/shared/loader-spinner/loader-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      CharacterSearchComponent,
      CharacterListComponent,
      PaginationComponent,
      MiddleBlockComponent,
      CharacterImageComponent,
      CharacterDescriptionComponent,
      PaginationButtonComponent,
      CharacterListMediasComponent,
      LoaderSpinnerComponent,
      ScrollToTopComponent
   ],
   entryComponents: [
      CharacterListMediasComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      MatDialogModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
      MatButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
