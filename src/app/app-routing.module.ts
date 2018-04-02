import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'find', redirectTo: 'search'},
  { path: 'home', component: HomeComponent },  
  { path: 'search', component: SearchComponent },
  { path: 'search/:term', component: SearchComponent },
  { 
    path: 'artist/:artistId',
    component: ArtistComponent,
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'prefix' },
      { path: 'tracks', component: ArtistTrackListComponent },
      { path: 'albums', component: ArtistAlbumListComponent }
    ] 
  },
  { path: '**', component: HomeComponent } //catch all route
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });

