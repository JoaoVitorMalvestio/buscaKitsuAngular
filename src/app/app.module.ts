import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListPaginationComponent } from './character-list-pagination/character-list-pagination.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      CharacterSearchComponent,
      CharacterListComponent,
      CharacterDetailsComponent,
      CharacterListPaginationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
