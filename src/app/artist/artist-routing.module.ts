import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './main/artist.component';
import { ArtistTrackListComponent } from './tracks/artist-track-list.component';
import { ArtistAlbumListComponent } from './albums/artist-album-list.component';

const routes: Routes = [
  { 
    path: '',
    component: ArtistComponent,
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'prefix' },
      { path: 'tracks', component: ArtistTrackListComponent },
      { path: 'albums', component: ArtistAlbumListComponent }
    ] 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }

