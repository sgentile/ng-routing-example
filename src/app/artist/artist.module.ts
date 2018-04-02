import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonpModule } from '@angular/http';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './main/artist.component';
import { ArtistTrackListComponent } from './tracks/artist-track-list.component';
import { ArtistAlbumListComponent } from './albums/artist-album-list.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SearchService } from '../search.service';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent
  ],
  imports: [
    CommonModule,    
    JsonpModule,
    ArtistRoutingModule
  ],
  providers: [SearchService]
})
export class ArtistModule { }
