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

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      CharacterSearchComponent,
      CharacterListComponent,
      CharacterDetailsComponent,
      CharacterListPaginationComponent,
      MiddleBlockComponent,
      CharacterImageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
